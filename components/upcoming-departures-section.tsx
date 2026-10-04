import { upcomingDepartures, type DepartureTone } from "@/data";

const toneClasses = {
  teal: "border border-emerald-200 bg-emerald-100 text-emerald-800",
  amber: "border border-amber-200 bg-amber-100 text-amber-800",
} as const;

export function UpcomingDeparturesSection() {
  function buildLeadHref(title: string, date: string) {
    return `?tour=${encodeURIComponent(`${title} — ${date}`)}#lead-form`;
  }

  return (
    <section
      id="departures"
      className="border-y border-[color:var(--accent)]/15 bg-[linear-gradient(180deg,#effaf8_0%,#fffef8_100%)] py-16 sm:py-20"
    >
      <div className="section-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-5">
            <span className="eyebrow border border-[color:var(--accent)]/20 bg-white/80 px-3 py-1.5 shadow-sm">
              Ближайшие выезды
            </span>
            <h2 className="section-title">Самые близкие даты, на которые уже можно оставить заявку</h2>
          </div>
          <a
            href="#lead-form"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--foreground)] px-5 text-sm font-black text-white transition hover:bg-[color:var(--brand-deep)]"
          >
            Оставить заявку
          </a>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {upcomingDepartures.map((departure) => (
            <article
              key={`${departure.date}-${departure.title}`}
              className="group glass-card rounded-[28px] border border-[color:var(--accent)]/18 bg-white/90 p-5 shadow-[0_18px_45px_rgba(19,134,125,0.10)] transition-transform duration-200 ease-out hover:-translate-y-1 focus-within:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:shadow-[0_22px_52px_rgba(19,134,125,0.16)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-within:translate-y-0 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="inline-flex rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-sm font-black uppercase tracking-[0.14em] text-[color:var(--accent)] transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                    {departure.date}
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-tight">{departure.title}</h3>
                </div>
                <span
                  className={`inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-black ${toneClasses[departure.statusTone as DepartureTone]}`}
                >
                  {departure.status}
                </span>
              </div>

              <div className="mt-5 grid gap-3 rounded-[24px] bg-white/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-[color:var(--ink-soft)]">Направление</span>
                  <span className="text-sm font-bold">{departure.location}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-[color:var(--ink-soft)]">Формат</span>
                  <span className="text-sm font-bold">{departure.format}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-[color:var(--ink-soft)]">Стоимость</span>
                  <span className="text-lg font-black">{departure.price}</span>
                </div>
              </div>

              <a
                href={buildLeadHref(departure.title, departure.date)}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[color:var(--brand)] px-5 text-sm font-black text-white transition hover:bg-[color:var(--brand-deep)]"
              >
                Оставить заявку на этот выезд
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
