"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { brand, tourCategories, tours } from "@/data";

export function ToursSection() {
  const [category, setCategory] = useState("Все");

  function buildLeadHref(title: string, date?: string) {
    const label = date ? `${title} — ${date}` : title;
    return `?tour=${encodeURIComponent(label)}#lead-form`;
  }

  const filteredTours = useMemo(() => {
    if (category === "Все") {
      return tours;
    }

    return tours.filter((tour) => tour.category === category);
  }, [category]);

  return (
    <section id="tours" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-5">
            <span className="eyebrow">Популярные туры</span>
            <h2 className="section-title">Направления, в которых детям интересно, а родителям все прозрачно</h2>
            <p className="section-copy">
              От образовательных выездов до морских каникул. Все программы адаптированы по возрасту,
              ритму и уровню самостоятельности участников.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tourCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  category === item
                    ? "bg-[color:var(--foreground)] text-white"
                    : "border bg-white/80 text-[color:var(--foreground)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 xl:grid-cols-2">
          {filteredTours.map((tour) => (
            <article key={tour.title} className="glass-card grid overflow-hidden rounded-[30px] border lg:grid-cols-[1.1fr_0.9fr]">
              <div className={`${tour.colorClass} text-white`}>
                {tour.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={tour.image.src}
                      alt={tour.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1279px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,15,26,0.06),rgba(12,15,26,0.58))]" />
                  </div>
                ) : null}

                <div className={`p-6 ${tour.image ? "bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0))]" : "min-h-[260px]"}`}>
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="inline-flex rounded-full border border-white/30 bg-white/12 px-3 py-1 text-xs font-black uppercase tracking-[0.14em]">
                        {tour.category}
                      </div>
                      {"date" in tour ? (
                        <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-white/72">
                          {tour.date}
                        </p>
                      ) : null}
                      <h3 className="mt-4 max-w-sm text-3xl font-black leading-tight">{tour.title}</h3>
                      <p className="mt-4 max-w-md text-sm leading-7 text-white/88">{tour.description}</p>
                    </div>
                    <div className="mt-8 grid gap-x-4 gap-y-5 [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]">
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-white/70">Возраст</p>
                        <p className="mt-1 text-lg font-black leading-tight break-words">{tour.age}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-white/70">Длительность</p>
                        <p className="mt-1 text-lg font-black leading-tight break-words">{tour.duration}</p>
                      </div>
                      <div className="rounded-[22px] border border-white/16 bg-white/12 p-4 shadow-[0_12px_28px_rgba(12,15,26,0.12)]">
                        <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/72">
                          Стоимость
                        </p>
                        <p className="mt-2 text-2xl font-black leading-tight text-white break-words sm:text-[1.95rem]">
                          {tour.price}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-white/72">Цена на человека</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6">
                <div>
                  <p className="text-sm font-black text-[color:var(--accent)]">{tour.location}</p>
                  <ul className="mt-4 space-y-3">
                    {tour.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[color:var(--ink-soft)]">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--brand)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {"included" in tour && tour.included ? (
                    <div className="mt-6 rounded-[24px] bg-[color:var(--accent-soft)]/45 p-4">
                      <p className="text-sm font-black text-[color:var(--foreground)]">В стоимость входит</p>
                      <ul className="mt-3 space-y-2">
                        {tour.included.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[color:var(--ink-soft)]">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {"note" in tour && tour.note ? (
                    <div className="mt-4 space-y-2 text-sm leading-6 text-[color:var(--ink-soft)]">
                      <p>{tour.note}</p>
                      <a
                        href={brand.instagramUrl}
                        className="inline-flex font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--brand)]"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram: {brand.instagramHandle}
                      </a>
                    </div>
                  ) : null}
                </div>
                <a
                  href={buildLeadHref(tour.title, "date" in tour ? tour.date : undefined)}
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--brand)] px-5 text-sm font-black text-white transition hover:bg-[color:var(--brand-deep)]"
                >
                  Оставить заявку
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
