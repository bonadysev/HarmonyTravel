import { brand } from "@/data";

function ContactIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
      {children}
    </span>
  );
}

export function LocationSection() {
  return (
    <section id="location" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="space-y-5">
          <span className="eyebrow">Контакты и адрес</span>
          <h2 className="section-title">Как нас найти</h2>
          <p className="section-copy">
            Если вам удобнее обсудить поездку лично или быстро построить маршрут, мы собрали
            все контакты и адрес в одном месте.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card rounded-[28px] border p-6 sm:p-7">
            <h3 className="text-2xl font-black">{brand.displayName}</h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--ink-soft)]">
              Мы на связи онлайн и всегда готовы помочь с выбором тура, программой поездки и
              организационными вопросами.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <ContactIcon>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-[color:var(--accent)] stroke-2" aria-hidden="true">
                    <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </ContactIcon>
                <div>
                  <p className="text-sm font-black text-[color:var(--foreground)]">Адрес</p>
                  <p className="mt-1 text-sm leading-6 text-[color:var(--ink-soft)]">
                    Республика Беларусь, г. Жлобин, ул. Козлова 25
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ContactIcon>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-[color:var(--accent)] stroke-2" aria-hidden="true">
                    <path
                      d="M5 4.75h3.03a1 1 0 0 1 .97.76l.58 2.35a1 1 0 0 1-.29.97L7.82 10.3a13.4 13.4 0 0 0 5.88 5.88l1.47-1.47a1 1 0 0 1 .97-.29l2.35.58a1 1 0 0 1 .76.97V19a1 1 0 0 1-1 1h-1c-7.32 0-13.25-5.93-13.25-13.25v-1a1 1 0 0 1 1-1Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ContactIcon>
                <div>
                  <p className="text-sm font-black text-[color:var(--foreground)]">Телефон</p>
                  <a href={`tel:${brand.phone}`} className="mt-1 inline-flex text-sm leading-6 text-[color:var(--ink-soft)] hover:text-[color:var(--accent)]">
                    {brand.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ContactIcon>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-[color:var(--accent)] stroke-2" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </ContactIcon>
                <div>
                  <p className="text-sm font-black text-[color:var(--foreground)]">Email</p>
                  <a href={`mailto:${brand.email}`} className="mt-1 inline-flex text-sm leading-6 text-[color:var(--ink-soft)] hover:text-[color:var(--accent)]">
                    {brand.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ContactIcon>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-[color:var(--accent)]" aria-hidden="true">
                    <path d="M20.67 3.33a1 1 0 0 0-1.06-.17L3.94 9.41a1 1 0 0 0 .09 1.87l3.74 1.25 1.25 3.74a1 1 0 0 0 .74.66 1 1 0 0 0 .22.03 1 1 0 0 0 .91-.58l6.25-15.67a1 1 0 0 0-.47-1.38Zm-9.9 10.61-.53 1.33-.7-2.09 5.31-5.31-4.08 6.07Z" />
                  </svg>
                </ContactIcon>
                <div>
                  <p className="text-sm font-black text-[color:var(--foreground)]">Telegram</p>
                  <a
                    href={brand.telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex text-sm leading-6 text-[color:var(--ink-soft)] hover:text-[color:var(--accent)]"
                  >
                    {brand.telegramChannel}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[24px] bg-[color:var(--accent-soft)]/35 p-4">
              <p className="text-sm font-black text-[color:var(--foreground)]">График работы</p>
              <p className="mt-1 text-sm leading-6 text-[color:var(--ink-soft)]">{brand.schedule}</p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={brand.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--brand)] px-5 text-sm font-black text-white transition hover:bg-[color:var(--brand-deep)]"
              >
                Построить маршрут
              </a>
              <a
                href={brand.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--foreground)]/10 bg-white px-5 text-sm font-bold text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                Написать в Telegram
              </a>
            </div>
          </div>

          <a
            href={brand.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-card rounded-[28px] border p-4 sm:p-6"
          >
            <div className="flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-[24px] bg-[linear-gradient(160deg,#eefaf8,#ffffff_48%,#f6f0ff)] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]">
              <div className="relative overflow-hidden rounded-[22px] border border-white/60 bg-white/65 p-4">
                <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(19,134,125,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(19,134,125,0.12)_1px,transparent_1px)] [background-position:center] [background-size:32px_32px]" />
                <div className="relative z-10 flex min-h-[150px] items-center justify-center">
                  <div className="relative">
                    <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent)]/18 blur-2xl" />
                    <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-[18px] bg-[color:var(--brand)] text-white shadow-[0_14px_30px_rgba(244,106,64,0.24)]">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2" aria-hidden="true">
                        <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[color:var(--accent)]">Жлобин</p>
                <h3 className="mt-2 text-2xl font-black leading-tight">ул. Козлова 25</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
                  Открыть карту и построить маршрут в приложении. Подойдет, если удобнее быстро
                  сориентироваться по адресу перед звонком или визитом.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
