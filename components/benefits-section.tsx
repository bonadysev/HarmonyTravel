import { benefits } from "@/data";

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">Почему родители выбирают нас</span>
          <h2 className="section-title">Каждая программа строится вокруг безопасности, заботы и реальной пользы для ребенка</h2>
          <p className="section-copy">
            Мы проектируем поездки так, чтобы ребенку было интересно, а родителям спокойно на каждом этапе:
            от первого звонка до возвращения домой.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="glass-card rounded-[28px] border p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-xl font-black text-[color:var(--accent)]">
                {item.badge}
              </div>
              <h3 className="mt-5 text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-[color:var(--ink-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
