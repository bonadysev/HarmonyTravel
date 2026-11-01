"use client";

import { requestCookieSettings } from "@/lib/cookie-consent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={requestCookieSettings}
      className="mt-2 inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent-soft)]/30 px-5 text-sm font-bold text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent-soft)]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
    >
      Изменить настройки cookie
    </button>
  );
}
