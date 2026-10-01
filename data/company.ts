import generatedCompany from "@/data/generated/company.json";
import type { CompanyInfo } from "@/data/types";

const repoBasePath = process.env.NODE_ENV === "production" ? "/HarmonyTravel" : "";

export const brand: CompanyInfo = {
  ...(generatedCompany as CompanyInfo),
  logoPath: `${repoBasePath}/${generatedCompany.logoPath.replace(/^\/+/, "")}`,
};
