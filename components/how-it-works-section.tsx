import { steps } from "@/data/site";

export function HowItWorksSection() {
  return (
    <section id="process" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="space-y-5">
          <span className="eyebrow">Как все устроено</span>
          <h2 className="section-title">Прозрачный процесс без лишней суеты для семьи</h2>
          <p className="section-copy">
            Маршрут выбора тура понятен заранее: мы уточняем задачу, предлагаем варианты,
            помогаем с документами и держим контакт до самого возвращения.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="glass-card rounded-[28px] border p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--foreground)] text-lg font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
