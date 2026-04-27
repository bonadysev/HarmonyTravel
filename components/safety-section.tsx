import { safetyItems } from "@/data/site";

export function SafetySection() {
  return (
    <section id="safety" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[30px] bg-[color:var(--foreground)] px-6 py-8 text-white sm:px-8 sm:py-10">
            <span className="eyebrow border-white/20 bg-white/10 text-white">Безопасность</span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
              Родители видят систему, а не обещания
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/78">
              Мы заранее проверяем маршрут, проживание, трансферы и сопровождающих. Во время поездки
              у семьи есть понятный канал связи и ежедневный ритм отчетности.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/14 bg-white/8 p-5">
                <p className="text-3xl font-black">24/7</p>
                <p className="mt-2 text-sm leading-6 text-white/72">Связь с куратором и оперативные ответы родителям</p>
              </div>
              <div className="rounded-3xl border border-white/14 bg-white/8 p-5">
                <p className="text-3xl font-black">1:12</p>
                <p className="mt-2 text-sm leading-6 text-white/72">Комфортное соотношение взрослого сопровождающего к группе</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {safetyItems.map((item) => (
              <article key={item.title} className="glass-card rounded-[28px] border p-6">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[color:var(--accent)]">
                  {item.kicker}
                </p>
                <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[color:var(--ink-soft)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
