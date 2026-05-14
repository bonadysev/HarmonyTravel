import { upcomingDepartures, type DepartureTone } from "@/data";

const toneClasses = {
  teal: "bg-emerald-100 text-emerald-800",
  amber: "bg-amber-100 text-amber-800",
} as const;

export function UpcomingDeparturesSection() {
  function buildLeadHref(title: string, date: string) {
    return `?tour=${encodeURIComponent(`${title} — ${date}`)}#lead-form`;
  }

  return (
    <section id="departures" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-5">
            <span className="eyebrow">Ближайшие выезды</span>
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
            <article key={`${departure.date}-${departure.title}`} className="glass-card rounded-[28px] border p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-[color:var(--accent)]">
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
