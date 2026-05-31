import Image from "next/image";
import { brand } from "@/data";

const telegramLogoPath = process.env.NODE_ENV === "production" ? "/HarmonyTravel/telegram_logo.jpg" : "/telegram_logo.jpg";

export function MobileStickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/92 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-14px_36px_rgba(23,32,51,0.14)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 rounded-[26px] bg-white/88 p-2 shadow-[0_10px_30px_rgba(23,32,51,0.08)]">
        <a
          href={brand.telegramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-14 flex-col items-center justify-center gap-1 rounded-[22px] border border-[color:var(--accent)]/12 bg-[color:var(--accent-soft)]/28 px-2 text-center text-[11px] font-bold text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          aria-label="Открыть Telegram-канал Harmony Travel"
        >
          <span className="relative inline-flex h-8 w-8 shrink-0 overflow-hidden rounded-full bg-white shadow-sm">
            <Image
              src={telegramLogoPath}
              alt=""
              fill
              className="scale-[1.34] object-cover"
              sizes="32px"
            />
          </span>
          Telegram
        </a>
        <a
          href="#lead-form"
          className="inline-flex min-h-14 flex-col items-center justify-center gap-1 rounded-[22px] bg-[linear-gradient(135deg,var(--brand),var(--brand-deep))] px-2 text-center text-[11px] font-black text-white shadow-[0_14px_30px_rgba(244,106,64,0.28)] transition hover:brightness-105"
          aria-label="Перейти к форме заявки"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden="true">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </span>
          Оставить заявку
        </a>
        <a
          href={`tel:${brand.phone}`}
          className="inline-flex min-h-14 flex-col items-center justify-center gap-1 rounded-[22px] border border-[color:var(--foreground)]/10 bg-white px-2 text-center text-[11px] font-bold text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          aria-label={`Позвонить по номеру ${brand.phone}`}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--sun)]/35 text-[color:var(--foreground)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden="true">
              <path
                d="M5 4.75h3.03a1 1 0 0 1 .97.76l.58 2.35a1 1 0 0 1-.29.97L7.82 10.3a13.4 13.4 0 0 0 5.88 5.88l1.47-1.47a1 1 0 0 1 .97-.29l2.35.58a1 1 0 0 1 .76.97V19a1 1 0 0 1-1 1h-1c-7.32 0-13.25-5.93-13.25-13.25v-1a1 1 0 0 1 1-1Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Позвонить
        </a>
      </div>
    </div>
  );
}
