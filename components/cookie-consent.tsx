"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "harmony_cookie_consent";
const COOKIE_CONSENT_EVENT = "harmony-cookie-consent-change";

type ConsentMode = "notice" | "settings";

type CookieConsentValue = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

function saveConsent(analytics: boolean) {
  const value: CookieConsentValue = {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value));
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

function isPolicyPage() {
  return ["/cookie-policy", "/privacy-policy"].some((path) => window.location.pathname.includes(path));
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState<ConsentMode>("notice");
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    setIsVisible(!isPolicyPage() && window.localStorage.getItem(COOKIE_CONSENT_KEY) === null);
  }, []);

  if (!isVisible) {
    return null;
  }

  const acceptAll = () => {
    saveConsent(true);
    setIsVisible(false);
  };

  const rejectOptional = () => {
    saveConsent(false);
    setIsVisible(false);
  };

  const saveSettings = () => {
    saveConsent(analyticsEnabled);
    setIsVisible(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div className="w-full max-w-4xl rounded-[28px] bg-white px-5 py-7 shadow-[0_28px_90px_rgba(23,32,51,0.22)] sm:px-9 sm:py-9">
        {mode === "notice" ? (
          <>
            <h2
              id="cookie-consent-title"
              className="text-center text-3xl font-black leading-tight text-[color:var(--foreground)] sm:text-4xl"
            >
              Обработка файлов Cookie
            </h2>

            <div className="mx-auto mt-7 max-w-3xl space-y-5 text-base leading-7 text-[color:var(--foreground)] sm:text-xl sm:leading-8">
              <p>
                Наш сайт использует файлы cookie для улучшения пользовательского опыта,
                сбора статистики и анализа работы страниц.
              </p>
              <p>
                Чтобы получить больше информации о целях, сроках и порядке использования файлов cookie,
                пожалуйста, ознакомьтесь с нашей{" "}
                <Link
                  href="/cookie-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="font-black underline decoration-2 underline-offset-4"
                >
                  Политикой в отношении обработки файлов cookie
                </Link>
                .
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={rejectOptional}
                className="rounded-xl bg-[#f0f0f0] px-5 py-4 text-lg font-black text-[color:var(--foreground)] transition hover:bg-[#e6e6e6] sm:text-xl"
              >
                Отклонить*
              </button>
              <button
                type="button"
                onClick={() => setMode("settings")}
                className="rounded-xl bg-[#f0f0f0] px-5 py-4 text-lg font-black text-[color:var(--foreground)] transition hover:bg-[#e6e6e6] sm:text-xl"
              >
                Настроить
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-xl bg-[#b8e233] px-5 py-4 text-lg font-black text-[color:var(--foreground)] transition hover:bg-[#a9d229] sm:text-xl"
              >
                Принять
              </button>
            </div>

            <p className="mt-5 text-center text-sm font-semibold text-slate-400 sm:text-base">
              *Все, кроме обязательных
            </p>
          </>
        ) : (
          <>
            <h2
              id="cookie-consent-title"
              className="text-3xl font-black leading-tight text-[color:var(--foreground)] sm:text-4xl"
            >
              Настройка cookie
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[color:var(--ink-soft)] sm:text-lg">
              Обязательные cookie и техническое хранение нужны для работы сайта и запоминания вашего выбора.
              Аналитические cookie Яндекс.Метрики помогают понимать, какие разделы сайта удобны родителям.
            </p>

            <div className="mt-7 grid gap-4">
              <div className="rounded-2xl border bg-slate-50 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-black">Обязательные</p>
                    <p className="mt-1 text-sm leading-6 text-[color:var(--ink-soft)]">
                      Нужны для корректной работы сайта и хранения выбранных настроек cookie.
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-[color:var(--accent)]">
                    Всегда активны
                  </span>
                </div>
              </div>

              <label className="rounded-2xl border bg-white p-5">
                <span className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <span>
                    <span className="block text-lg font-black">Аналитические</span>
                    <span className="mt-1 block text-sm leading-6 text-[color:var(--ink-soft)]">
                      Позволяют подключить Яндекс.Метрику, Вебвизор, карту кликов и статистику посещаемости.
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                    className="h-7 w-7 accent-[color:var(--brand)]"
                  />
                </span>
              </label>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => setMode("notice")}
                className="rounded-xl bg-[#f0f0f0] px-5 py-4 text-lg font-black text-[color:var(--foreground)] transition hover:bg-[#e6e6e6]"
              >
                Назад
              </button>
              <button
                type="button"
                onClick={rejectOptional}
                className="rounded-xl bg-[#f0f0f0] px-5 py-4 text-lg font-black text-[color:var(--foreground)] transition hover:bg-[#e6e6e6]"
              >
                Отклонить*
              </button>
              <button
                type="button"
                onClick={saveSettings}
                className="rounded-xl bg-[#b8e233] px-5 py-4 text-lg font-black text-[color:var(--foreground)] transition hover:bg-[#a9d229]"
              >
                Сохранить
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
