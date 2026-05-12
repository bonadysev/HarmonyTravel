"use client";

import Image from "next/image";
import { useState } from "react";
import { brand, navigationItems } from "@/data";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
      <div className="section-shell flex min-h-[4.5rem] items-center justify-between gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/60 bg-[#261a53] shadow-sm">
            <Image
              src={brand.logoPath}
              alt={`Логотип ${brand.displayName}`}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-black">{brand.shortName}</p>
            <p className="truncate text-sm text-[color:var(--ink-soft)]">{brand.displayName} | Детские туры </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[color:var(--foreground)] transition hover:text-[color:var(--brand)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={brand.telegramUrl}
            className="rounded-full border px-4 py-2 text-sm font-bold transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Telegram
          </a>
          <a
            href="#lead-form"
            className="rounded-full bg-[color:var(--brand)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[color:var(--brand-deep)]"
          >
            Подобрать тур
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white/80 lg:hidden"
          aria-expanded={isOpen}
          aria-label="Открыть меню"
        >
          <span className="text-lg font-black">{isOpen ? "x" : "="}</span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/50 bg-white/92 lg:hidden">
          <div className="section-shell flex flex-col gap-3 py-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border bg-white px-4 py-3 text-sm font-semibold"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#lead-form"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-[color:var(--brand)] px-4 py-3 text-center text-sm font-bold text-white"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
