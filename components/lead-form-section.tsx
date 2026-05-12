"use client";

import { ValidationError, useForm } from "@formspree/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { brand } from "@/data";

const initialFormValues = {
  parentName: "",
  childAge: "",
  phone: "",
  email: "",
  message: "",
};

export function LeadFormSection() {
  const [state, handleSubmit] = useForm("xrejeapr");
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedTour, setSelectedTour] = useState("");
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    function syncSelectedTour() {
      const params = new URLSearchParams(window.location.search);
      setSelectedTour(params.get("tour") ?? "");
    }

    syncSelectedTour();
    window.addEventListener("popstate", syncSelectedTour);
    window.addEventListener("hashchange", syncSelectedTour);

    return () => {
      window.removeEventListener("popstate", syncSelectedTour);
      window.removeEventListener("hashchange", syncSelectedTour);
      };
  }, []);

  function clearTourFromUrl() {
    const url = new URL(window.location.href);
    url.searchParams.delete("tour");
    const nextUrl = `${url.pathname}${url.search ? `?${url.searchParams.toString()}` : ""}#lead-form`;
    window.history.replaceState({}, "", nextUrl);
  }

  function handleChange(event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = event.currentTarget;
    const { name, value } = target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleClearForm() {
    setFormValues(initialFormValues);
    setSelectedTour("");
    clearTourFromUrl();
    formRef.current?.reset();
  }

  const isFormEmpty =
    !selectedTour &&
    !formValues.parentName &&
    !formValues.childAge &&
    !formValues.phone &&
    !formValues.email &&
    !formValues.message;

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

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-[28px] bg-white p-5 text-[color:var(--foreground)] shadow-2xl sm:p-6"
          >
            <input type="hidden" name="_subject" value="Новая заявка на подбор тура с Harmony Travel" />
            <input type="hidden" name="_language" value="ru" />
            <input type="hidden" name="selectedTour" value={selectedTour} />

            {selectedTour ? (
              <div className="mb-4 rounded-[24px] bg-[color:var(--accent-soft)]/45 p-4">
                <p className="text-sm font-bold text-[color:var(--ink-soft)]">Выбранный выезд</p>
                <p className="mt-1 text-base font-black">{selectedTour}</p>
              </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">Имя родителя</span>
                <input
                  id="parentName"
                  name="parentName"
                  required
                  value={formValues.parentName}
                  onChange={handleChange}
                  className="min-h-12 rounded-2xl border bg-white px-4 outline-none transition focus:border-[color:var(--accent)]"
                  placeholder="Анна"
                />
                <ValidationError
                  prefix="Имя родителя"
                  field="parentName"
                  errors={state.errors}
                  className="text-sm text-rose-600"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">Возраст ребенка</span>
                <input
                  id="childAge"
                  name="childAge"
                  required
                  value={formValues.childAge}
                  onChange={handleChange}
                  className="min-h-12 rounded-2xl border bg-white px-4 outline-none transition focus:border-[color:var(--accent)]"
                  placeholder="12"
                />
                <ValidationError
                  prefix="Возраст ребенка"
                  field="childAge"
                  errors={state.errors}
                  className="text-sm text-rose-600"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">Телефон или мессенджер</span>
                <input
                  id="phone"
                  name="phone"
                  required
                  value={formValues.phone}
                  onChange={handleChange}
                  className="min-h-12 rounded-2xl border bg-white px-4 outline-none transition focus:border-[color:var(--accent)]"
                  placeholder={brand.phone}
                />
                <ValidationError
                  prefix="Телефон"
                  field="phone"
                  errors={state.errors}
                  className="text-sm text-rose-600"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">Email для ответа</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formValues.email}
                  onChange={handleChange}
                  className="min-h-12 rounded-2xl border bg-white px-4 outline-none transition focus:border-[color:var(--accent)]"
                  placeholder={brand.email}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-sm text-rose-600"
                />
              </label>
            </div>

            <label className="mt-4 flex flex-col gap-2">
              <span className="text-sm font-bold">Интересы и пожелания</span>
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                className="min-h-32 rounded-2xl border bg-white px-4 py-3 outline-none transition focus:border-[color:var(--accent)]"
                placeholder="Любит море, английский язык и активные программы"
                required
              />
              <ValidationError
                prefix="Пожелания"
                field="message"
                errors={state.errors}
                className="text-sm text-rose-600"
              />
            </label>

            <button
              type="submit"
              disabled={state.submitting}
              className="mt-5 inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-[color:var(--brand)] px-5 text-base font-black text-white transition hover:bg-[color:var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {state.submitting ? "Отправляем..." : "Получить подборку туров"}
            </button>

            <button
              type="button"
              onClick={handleClearForm}
              disabled={isFormEmpty || state.submitting}
              className="mt-3 inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full border border-[color:var(--foreground)]/12 bg-white px-5 text-base font-black text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Очистить форму
            </button>

            <p className="mt-4 text-sm leading-6 text-[color:var(--ink-soft)]">
              Отправляя форму, пользователь соглашается на обработку персональных данных в {brand.legalName}.
            </p>

            {state.succeeded ? (
              <p
                className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
              >
                Заявка отправлена. Мы свяжемся с вами и предложим подходящие варианты.
              </p>
            ) : null}

            <ValidationError errors={state.errors} className="mt-4 text-sm font-semibold text-rose-600" />
          </form>
        </div>
      </div>
    </section>
  );
}
