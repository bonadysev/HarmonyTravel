import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const defaultSpreadsheetId = "1ovRLEXWdLuRRTmLsyc5c2i-WfdUxAwwd4FKq65BvVd0";
const spreadsheetId = process.env.GOOGLE_SHEETS_ID || defaultSpreadsheetId;
const outputDirectory = path.resolve("data/generated");

const schemas = {
  tours: ["id", "active", "category", "title", "location", "date", "age", "duration", "price", "description", "features", "included", "note", "colorClass", "imageFile", "imageAlt"],
  departures: ["id", "linkedTourId", "date", "title", "location", "price", "format", "status", "statusTone"],
  reviews: ["id", "author", "city", "parentContext", "childAge", "tour", "quote", "accentTone"],
  faqs: ["id", "question", "answer"],
  company: ["key", "value", "comment"],
};

function parseCsv(source) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    const nextCharacter = source[index + 1];

    if (quoted) {
      if (character === '"' && nextCharacter === '"') {
        value += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        value += character;
      }
      continue;
    }

    if (character === '"') {
      quoted = true;
    } else if (character === ",") {
      row.push(value);
      value = "";
    } else if (character === "\n") {
      row.push(value.replace(/\r$/, ""));
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
      value = "";
    } else {
      value += character;
    }
  }

  if (value !== "" || row.length > 0) {
    row.push(value.replace(/\r$/, ""));
    if (row.some((cell) => cell.trim() !== "")) rows.push(row);
  }

  return rows;
}

function required(value, field, rowNumber, sheetName) {
  const normalized = String(value ?? "").trim();
  if (!normalized) throw new Error(`${sheetName}: строка ${rowNumber}, поле ${field} обязательно`);
  return normalized;
}

function optional(value) {
  return String(value ?? "").trim();
}

function parseBoolean(value, field, rowNumber, sheetName) {
  const normalized = optional(value).toLowerCase();
  if (["true", "1", "yes", "да"].includes(normalized)) return true;
  if (["false", "0", "no", "нет"].includes(normalized)) return false;
  throw new Error(`${sheetName}: строка ${rowNumber}, поле ${field} должно быть true/false`);
}

function parseList(value) {
  return optional(value)
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

function assertUnique(rows, field, sheetName) {
  const seen = new Set();
  rows.forEach((row, index) => {
    const value = required(row[field], field, index + 2, sheetName);
    if (seen.has(value)) throw new Error(`${sheetName}: дублируется ${field} "${value}"`);
    seen.add(value);
  });
}

async function readSheet(sheetName) {
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&headers=1&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Не удалось прочитать лист ${sheetName}: HTTP ${response.status}`);
  const rows = parseCsv(await response.text());
  if (rows.length === 0) throw new Error(`Лист ${sheetName} пуст`);

  const headers = rows[0].map((header) => header.replace(/^\uFEFF/, "").trim());
  const expectedHeaders = schemas[sheetName];
  const missingHeaders = expectedHeaders.filter((header) => !headers.includes(header));
  const nonEmptyHeaders = headers.filter(Boolean);
  const extraHeaders = nonEmptyHeaders.filter((header) => !expectedHeaders.includes(header));
  if (missingHeaders.length || extraHeaders.length || new Set(nonEmptyHeaders).size !== nonEmptyHeaders.length) {
    throw new Error(`Лист ${sheetName}: неверные заголовки. Не хватает: ${missingHeaders.join(", ") || "нет"}; лишние: ${extraHeaders.join(", ") || "нет"}`);
  }

  return rows.slice(1).map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""])));
}

function normalizeTours(rows) {
  assertUnique(rows, "id", "tours");
  const categories = new Set(["Языковые", "Активные", "Морские", "Экскурсионные"]);
  return rows.map((row, index) => {
    const rowNumber = index + 2;
    const category = required(row.category, "category", rowNumber, "tours");
    if (!categories.has(category)) throw new Error(`tours: строка ${rowNumber}, неизвестная категория ${category}`);
    const imageFile = optional(row.imageFile);
    return {
      id: required(row.id, "id", rowNumber, "tours"),
      category,
      title: required(row.title, "title", rowNumber, "tours"),
      location: required(row.location, "location", rowNumber, "tours"),
      date: required(row.date, "date", rowNumber, "tours"),
      age: required(row.age, "age", rowNumber, "tours"),
      duration: required(row.duration, "duration", rowNumber, "tours"),
      price: required(row.price, "price", rowNumber, "tours"),
      description: required(row.description, "description", rowNumber, "tours"),
      features: parseList(required(row.features, "features", rowNumber, "tours")),
      included: parseList(row.included),
      note: optional(row.note) || undefined,
      colorClass: optional(row.colorClass) || "bg-[linear-gradient(160deg,#24364f,#1b7f82_55%,#ef6b43)]",
      image: imageFile
        ? { src: `tours/${imageFile.replace(/^\/+/, "")}`, alt: optional(row.imageAlt) || required(row.title, "title", rowNumber, "tours") }
        : undefined,
      active: parseBoolean(row.active, "active", rowNumber, "tours"),
    };
  });
}

function normalizeDepartures(rows, tours) {
  assertUnique(rows, "id", "departures");
  const tourIds = new Set(tours.map((tour) => tour.id));
  return rows.map((row, index) => {
    const rowNumber = index + 2;
    const linkedTourId = required(row.linkedTourId, "linkedTourId", rowNumber, "departures");
    if (!tourIds.has(linkedTourId)) throw new Error(`departures: строка ${rowNumber}, тур ${linkedTourId} не найден`);
    const statusTone = required(row.statusTone, "statusTone", rowNumber, "departures");
    if (!["teal", "amber"].includes(statusTone)) throw new Error(`departures: строка ${rowNumber}, statusTone должен быть teal или amber`);
    return {
      id: required(row.id, "id", rowNumber, "departures"),
      linkedTourId,
      date: required(row.date, "date", rowNumber, "departures"),
      title: required(row.title, "title", rowNumber, "departures"),
      location: required(row.location, "location", rowNumber, "departures"),
      price: required(row.price, "price", rowNumber, "departures"),
      format: required(row.format, "format", rowNumber, "departures"),
      status: required(row.status, "status", rowNumber, "departures"),
      statusTone,
    };
  });
}

function normalizeReviews(rows) {
  assertUnique(rows, "id", "reviews");
  return rows.map((row, index) => {
    const rowNumber = index + 2;
    const accentTone = required(row.accentTone, "accentTone", rowNumber, "reviews");
    if (!["teal", "violet", "amber"].includes(accentTone)) throw new Error(`reviews: строка ${rowNumber}, accentTone неизвестен`);
    return {
      id: required(row.id, "id", rowNumber, "reviews"),
      author: required(row.author, "author", rowNumber, "reviews"),
      city: required(row.city, "city", rowNumber, "reviews"),
      parentContext: required(row.parentContext, "parentContext", rowNumber, "reviews"),
      childAge: required(row.childAge, "childAge", rowNumber, "reviews"),
      tour: required(row.tour, "tour", rowNumber, "reviews"),
      quote: required(row.quote, "quote", rowNumber, "reviews"),
      accentTone,
    };
  });
}

function normalizeFaqs(rows) {
  assertUnique(rows, "id", "faqs");
  return rows.map((row, index) => ({
    id: required(row.id, "id", index + 2, "faqs"),
    question: required(row.question, "question", index + 2, "faqs"),
    answer: required(row.answer, "answer", index + 2, "faqs"),
  }));
}

function normalizeCompany(rows) {
  const company = Object.fromEntries(rows.map((row, index) => [required(row.key, "key", index + 2, "company"), optional(row.value)]));
  const requiredKeys = ["shortName", "displayName", "legalName", "phone", "telegramChannel", "telegramUrl", "instagramHandle", "instagramUrl", "legalAddress", "email", "director", "googleMapsUrl", "unp", "schedule"];
  requiredKeys.forEach((key) => required(company[key], key, 1, "company"));
  return {
    ...company,
    logoPath: optional(company.logoPath) || "harmony-travel-logo.jpg",
  };
}

async function writeJson(fileName, value) {
  await writeFile(path.join(outputDirectory, fileName), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function main() {
  const [tourRows, departureRows, reviewRows, faqRows, companyRows] = await Promise.all([
    readSheet("tours"),
    readSheet("departures"),
    readSheet("reviews"),
    readSheet("faqs"),
    readSheet("company"),
  ]);
  const tours = normalizeTours(tourRows);
  await mkdir(outputDirectory, { recursive: true });
  await Promise.all([
    writeJson("tours.json", tours),
    writeJson("departures.json", normalizeDepartures(departureRows, tours)),
    writeJson("reviews.json", normalizeReviews(reviewRows)),
    writeJson("faqs.json", normalizeFaqs(faqRows)),
    writeJson("company.json", normalizeCompany(companyRows)),
  ]);
  console.log(`Google Sheets ${spreadsheetId} синхронизирован: ${tours.length} туров, ${departureRows.length} выездов, ${reviewRows.length} отзывов, ${faqRows.length} FAQ`);
}

main().catch((error) => {
  console.error(`sync-google-sheets: ${error.message}`);
  process.exitCode = 1;
});
