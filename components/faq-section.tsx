"use client";

import { useState } from "react";
import { faqs } from "@/data/site";

export function FaqSection() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-5">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Ответы на вопросы, которые родители задают чаще всего</h2>
            <p className="section-copy">
              Этот блок снимает тревогу до общения с менеджером и помогает понять,
              как именно устроены поездки, сопровождение и документы.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openItem === index;

              return (
                <article key={item.question} className="glass-card rounded-[24px] border">
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-black sm:text-lg">{item.question}</span>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-lg font-black text-[color:var(--accent)]">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <p className="max-w-3xl text-sm leading-7 text-[color:var(--ink-soft)] sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
