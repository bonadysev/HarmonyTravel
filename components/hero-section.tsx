import Image from "next/image";
import { brand, heroHighlights, heroStats } from "@/data/site";

export function HeroSection() {
  return (
    <section id="top" className="overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-12">
      <div className="section-shell">
        <div className="hero-grid relative grid gap-8 overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,250,240,0.96),rgba(255,255,255,0.82))] px-5 py-6 shadow-[0_24px_80px_rgba(23,32,51,0.12)] sm:px-8 sm:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-10">
          <div className="absolute -left-18 top-14 h-40 w-40 rounded-full bg-[color:var(--sun)]/70 blur-3xl" />
          <div className="absolute bottom-8 right-8 h-52 w-52 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <span className="eyebrow">{brand.displayName} | Детские туры 7-17 лет</span>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-black leading-[1.02] sm:text-5xl lg:text-7xl">
                  Детские туры от Harmony Travel с акцентом на безопасность, развитие и яркие впечатления
                </h1>
                <p className="max-w-2xl text-base leading-7 text-[color:var(--ink-soft)] sm:text-lg">
                  {brand.displayName} помогает семьям выбирать детские туры с понятной программой,
                  внимательным сопровождением и спокойной коммуникацией на каждом этапе поездки.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#lead-form"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-[color:var(--brand)] px-6 text-base font-black text-white transition hover:bg-[color:var(--brand-deep)]"
                >
                  Подобрать тур
                </a>
                <a
                  href="#safety"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-[color:var(--foreground)]/12 bg-white/80 px-6 text-base font-bold text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                >
                  Как мы обеспечиваем безопасность
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.title} className="glass-card rounded-3xl border p-4">
                  <p className="text-sm font-black">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[color:var(--ink-soft)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 grid gap-4">
            <div className="glass-card relative min-h-[420px] overflow-hidden rounded-[28px] border p-4 sm:min-h-[520px]">
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,#201047,#2b1f6a_42%,#0f8b8d_120%)] p-6">
                <div className="absolute -right-10 top-8 h-44 w-44 rounded-full bg-[#7a6bf0]/28 blur-3xl" />
                <div className="absolute -left-8 bottom-10 h-36 w-36 rounded-full bg-[#2bc2ff]/24 blur-3xl" />
                <div className="relative z-10 flex flex-1 items-center justify-center">
                  <Image
                    src={brand.logoPath}
                    alt={`Логотип ${brand.displayName}`}
                    width={420}
                    height={420}
                    className="w-full max-w-[220px] rounded-[28px] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:max-w-[260px] lg:max-w-[300px]"
                    priority
                  />
                </div>
                <div className="relative z-10 rounded-3xl bg-white/90 p-4 shadow-lg backdrop-blur sm:p-5">
                  <p className="text-sm font-black text-[color:var(--accent)]">{brand.legalName}</p>
                  <p className="mt-1 text-xl font-black">Специализация на детских турах и семейном доверии</p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--ink-soft)]">
                    Подбор маршрутов, сопровождение и коммуникация с родителями в одном аккуратно выстроенном сервисе.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-3xl border bg-white/82 p-4">
                  <p className="text-3xl font-black">{item.value}</p>
                  <p className="mt-1 text-sm text-[color:var(--ink-soft)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
