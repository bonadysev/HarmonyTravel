import { reviews } from "@/data";

const reviewToneClasses = {
  teal: {
    avatar: "bg-[linear-gradient(145deg,#d9f6f3,#ffffff)] text-[#13867d]",
    quoteCard: "bg-[#eefaf8]",
    accent: "text-[#13867d]/45",
    badge: "bg-[#dff6f1] text-[#155f59]",
  },
  violet: {
    avatar: "bg-[linear-gradient(145deg,#ece5ff,#ffffff)] text-[#6a43b5]",
    quoteCard: "bg-[#f4efff]",
    accent: "text-[#6a43b5]/45",
    badge: "bg-[#eee7ff] text-[#55339d]",
  },
  amber: {
    avatar: "bg-[linear-gradient(145deg,#fff1db,#ffffff)] text-[#b06a1b]",
    quoteCard: "bg-[#fff7ea]",
    accent: "text-[#b06a1b]/45",
    badge: "bg-[#fff0d5] text-[#8c5a1e]",
  },
} as const;

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
            <article key={review.id} className="glass-card rounded-[28px] border p-6 shadow-[0_12px_32px_rgba(23,32,51,0.06)]">
              <div className="flex items-start gap-4">
                <div
                  className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-black shadow-sm ${reviewToneClasses[review.accentTone].avatar}`}
                >
                  {review.author.slice(0, 1)}
                </div>
                <div className="min-w-0">
                  <p className="text-base font-black">{review.author}</p>
                  <p className="text-sm text-[color:var(--ink-soft)]">
                    {review.parentContext} · {review.city}
                  </p>
                </div>
              </div>

              <div className={`mt-5 rounded-[24px] p-5 ${reviewToneClasses[review.accentTone].quoteCard}`}>
                <p className={`text-3xl font-black leading-none ${reviewToneClasses[review.accentTone].accent}`}>“</p>
                <p className="-mt-1 text-base leading-7 text-[color:var(--foreground)]">{review.quote}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${reviewToneClasses[review.accentTone].badge}`}
                >
                  {review.tour}
                </span>
                <span className="inline-flex rounded-full border border-[color:var(--foreground)]/10 bg-white/85 px-3 py-1 text-xs font-bold text-[color:var(--ink-soft)]">
                  {review.childAge}
                </span>
                <span className="inline-flex rounded-full border border-[color:var(--foreground)]/10 bg-white/85 px-3 py-1 text-xs font-bold text-[color:var(--ink-soft)]">
                  {review.city}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
