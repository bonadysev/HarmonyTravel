"use client";

import { FormEvent, useState } from "react";
import { brand } from "@/data/site";

const initialFormState = {
  parentName: "",
  childAge: "",
  phone: "",
  interests: "",
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function LeadFormSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Не удалось отправить заявку");
      }

      setStatus("success");
      setMessage("Заявка отправлена. Мы свяжемся с вами и предложим подходящие варианты.");
      setFormData(initialFormState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Произошла ошибка при отправке формы");
    }
  }

  return (
    <section id="lead-form" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-6 rounded-[32px] bg-[linear-gradient(135deg,#172033,#0f8b8d)] px-6 py-8 text-white shadow-[0_30px_80px_rgba(23,32,51,0.22)] sm:px-8 sm:py-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="space-y-5">
            <span className="eyebrow border-white/18 bg-white/10 text-white">Подбор тура</span>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Расскажите о ребенке, а мы подберем тур по возрасту, интересам и бюджету
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/75">
              Команда {brand.displayName} уточнит детали, предложит несколько программ и объяснит,
              как проходит оформление, сопровождение и связь с родителями.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={brand.telegramUrl}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-black text-white transition hover:bg-white/15"
              >
                Telegram-канал
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-black text-white transition hover:bg-white/15"
              >
                Написать на email
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[28px] bg-white p-5 text-[color:var(--foreground)] shadow-2xl sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">Имя родителя</span>
                <input
                  required
                  value={formData.parentName}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, parentName: event.target.value }))
                  }
                  className="min-h-12 rounded-2xl border bg-white px-4 outline-none transition focus:border-[color:var(--accent)]"
                  placeholder="Анна"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">Возраст ребенка</span>
                <input
                  required
                  value={formData.childAge}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, childAge: event.target.value }))
                  }
                  className="min-h-12 rounded-2xl border bg-white px-4 outline-none transition focus:border-[color:var(--accent)]"
                  placeholder="12"
                />
              </label>
            </div>

            <label className="mt-4 flex flex-col gap-2">
              <span className="text-sm font-bold">Телефон или мессенджер</span>
              <input
                required
                value={formData.phone}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, phone: event.target.value }))
                }
                className="min-h-12 rounded-2xl border bg-white px-4 outline-none transition focus:border-[color:var(--accent)]"
                placeholder={brand.phone}
              />
            </label>

            <label className="mt-4 flex flex-col gap-2">
              <span className="text-sm font-bold">Интересы и пожелания</span>
              <textarea
                value={formData.interests}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, interests: event.target.value }))
                }
                className="min-h-32 rounded-2xl border bg-white px-4 py-3 outline-none transition focus:border-[color:var(--accent)]"
                placeholder="Любит море, английский язык и активные программы"
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-5 inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-[color:var(--brand)] px-5 text-base font-black text-white transition hover:bg-[color:var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Отправляем..." : "Получить подборку туров"}
            </button>

            <p className="mt-4 text-sm leading-6 text-[color:var(--ink-soft)]">
              Отправляя форму, пользователь соглашается на обработку персональных данных в {brand.legalName}.
            </p>

            {message ? (
              <p
                className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${
                  status === "success"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-rose-50 text-rose-700"
                }`}
              >
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
