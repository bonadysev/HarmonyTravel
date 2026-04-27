import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  parentName: z.string().min(2, "Укажите имя родителя"),
  childAge: z.string().min(1, "Укажите возраст ребенка"),
  phone: z.string().min(6, "Укажите телефон или мессенджер"),
  interests: z.string().max(500, "Слишком длинное сообщение").optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: result.error.issues[0]?.message || "Некорректные данные формы" },
        { status: 400 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Заявка принята",
      data: result.data,
    });
  } catch {
    return NextResponse.json({ message: "Не удалось обработать запрос" }, { status: 500 });
  }
}
