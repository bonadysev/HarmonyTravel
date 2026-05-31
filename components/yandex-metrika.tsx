"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const YANDEX_METRIKA_ID = 109544158;
const COOKIE_CONSENT_KEY = "harmony_cookie_consent";
const COOKIE_CONSENT_EVENT = "harmony-cookie-consent-change";

type CookieConsentState = {
  analytics?: boolean;
};

function hasAnalyticsConsent() {
  try {
    const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!saved) {
      return false;
    }

    const parsed = JSON.parse(saved) as CookieConsentState;

    return parsed.analytics === true;
  } catch {
    return false;
  }
}

export function YandexMetrika() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const updateConsent = () => setAnalyticsAllowed(hasAnalyticsConsent());

    updateConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, updateConsent);
    window.addEventListener("storage", updateConsent);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, updateConsent);
      window.removeEventListener("storage", updateConsent);
    };
  }, []);

  if (!analyticsAllowed) {
    return null;
  }

  return (
    <Script id="yandex-metrika-counter" strategy="afterInteractive">
      {`
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return; }
          }
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');

        ym(${YANDEX_METRIKA_ID}, 'init', {
          ssr: true,
          webvisor: true,
          clickmap: true,
          ecommerce: "dataLayer",
          referrer: document.referrer,
          url: location.href,
          accurateTrackBounce: true,
          trackLinks: true
        });
      `}
    </Script>
  );
}
