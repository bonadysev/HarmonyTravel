export const COOKIE_CONSENT_KEY = "harmony_cookie_consent";
export const COOKIE_CONSENT_EVENT = "harmony-cookie-consent-change";
export const COOKIE_SETTINGS_EVENT = "harmony-cookie-settings-open";

let settingsRequested = false;

export type CookieConsentValue = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

export function saveConsent(analytics: boolean) {
  const value: CookieConsentValue = {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };

  settingsRequested = false;
  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value));
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function requestCookieSettings() {
  settingsRequested = true;
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}

export function shouldShowCookieConsent() {
  if (settingsRequested) return true;

  const isPolicyPage = ["/cookie-policy", "/privacy-policy"].some((path) =>
    window.location.pathname.includes(path),
  );

  return !isPolicyPage && window.localStorage.getItem(COOKIE_CONSENT_KEY) === null;
}

export function hasAnalyticsConsent() {
  try {
    const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    return saved !== null && (JSON.parse(saved) as CookieConsentValue).analytics === true;
  } catch {
    return false;
  }
}
