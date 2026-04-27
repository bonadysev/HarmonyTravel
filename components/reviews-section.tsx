import { reviews } from "@/data/site";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="space-y-5">
          <span className="eyebrow">Отзывы родителей</span>
          <h2 className="section-title">Когда организация спокойная, впечатления остаются у всей семьи</h2>
          <p className="section-copy">
            Для родителей важны не только эмоции детей, но и то, как выстроены коммуникация,
            документы, бытовые вопросы и поддержка в поездке.
          </p>
        </div>

        <div className="mt-10 grid gap-4 xl:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.author} className="glass-card rounded-[28px] border p-6">
              <p className="text-base leading-7 text-[color:var(--foreground)]">"{review.quote}"</p>
              <div className="mt-6">
                <p className="text-base font-black">{review.author}</p>
                <p className="text-sm text-[color:var(--ink-soft)]">{review.city}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
