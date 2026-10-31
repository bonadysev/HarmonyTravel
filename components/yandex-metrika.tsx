"use client";

import { useEffect } from "react";
import { COOKIE_CONSENT_EVENT, hasAnalyticsConsent } from "@/lib/cookie-consent";

const YANDEX_METRIKA_ID = 109544158;

type YandexMetrikaFunction = ((...args: unknown[]) => void) & {
  a?: unknown[][];
  l?: number;
};

declare global {
  interface Window {
    ym?: YandexMetrikaFunction;
  }
}

let counterActive = false;

function loadAndStartCounter() {
  if (counterActive) return;

  const settings = {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: "dataLayer",
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true,
  };

  if (!window.ym) {
    const ym = ((...args: unknown[]) => {
      (ym.a ||= []).push(args);
    }) as YandexMetrikaFunction;
    ym.l = Date.now();
    window.ym = ym;
  }

  window.ym(YANDEX_METRIKA_ID, "init", settings);

  if (!document.querySelector("script[data-harmony-metrika]")) {
    const script = document.createElement("script");
    script.async = true;
    script.dataset.harmonyMetrika = "true";
    script.src = `https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}`;
    document.head.appendChild(script);
  }

  counterActive = true;
}

function clearAccessibleMetrikaData() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name) && /^_ym(?:_|$)/.test(name));
  const cookiePaths = new Set(["/"]);
  const currentDirectory = location.pathname.slice(0, location.pathname.lastIndexOf("/") + 1);
  if (currentDirectory) cookiePaths.add(currentDirectory);
  const hostParts = location.hostname.split(".");
  const cookieDomains = hostParts.flatMap((_, index) => {
    const domain = hostParts.slice(index).join(".");
    return [`; domain=${domain}`, `; domain=.${domain}`];
  });

  cookieNames.forEach((name) => {
    cookiePaths.forEach((path) => {
      document.cookie = `${name}=; Max-Age=0; path=${path}; SameSite=Lax`;
      cookieDomains.forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=${path}${domain}; SameSite=Lax`;
      });
    });
  });

  Object.keys(localStorage).forEach((key) => {
    if (
      key.startsWith(`_ym${YANDEX_METRIKA_ID}_`) ||
      key === "_ym_uid" ||
      key === "_ym_hide_phones" ||
      key === "_ym_retryReqs" ||
      key.startsWith(`ytm_tf_${YANDEX_METRIKA_ID}_`) ||
      key.startsWith(`ytm_tag_${YANDEX_METRIKA_ID}_`)
    ) {
      localStorage.removeItem(key);
    }
  });

  sessionStorage.removeItem("_ym_debugger_state");
  sessionStorage.removeItem("_ym_turbo_uid");
}

function stopCounter() {
  if (counterActive) {
    window.ym?.(YANDEX_METRIKA_ID, "destruct");
    counterActive = false;
  }

  clearAccessibleMetrikaData();
}

export function YandexMetrika() {
  useEffect(() => {
    const syncCounterWithConsent = () => {
      if (hasAnalyticsConsent()) {
        loadAndStartCounter();
      } else {
        stopCounter();
      }
    };

    syncCounterWithConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, syncCounterWithConsent);
    window.addEventListener("storage", syncCounterWithConsent);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, syncCounterWithConsent);
      window.removeEventListener("storage", syncCounterWithConsent);
    };
  }, []);

  return null;
}
