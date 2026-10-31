"use client";

import { requestCookieSettings } from "@/lib/cookie-consent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={requestCookieSettings}
      className="text-left transition hover:text-[color:var(--accent)] sm:text-right"
    >
      Настройки cookie
    </button>
  );
}
