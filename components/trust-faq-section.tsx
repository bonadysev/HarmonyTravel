"use client";

import { useState } from "react";
import { brand, faqs, trustItems } from "@/data";

export function TrustFaqSection() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="rounded-[32px] border bg-white/78 p-5 shadow-[0_24px_80px_rgba(23,32,51,0.08)] sm:p-7 lg:p-9">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="eyebrow">Доверие и вопросы</span>
              <h2 className="mt-5 section-title">Родители доверяют нам детские поездки</h2>
              <p className="mt-5 section-copy">
                Мы заранее продумываем маршрут, сопровождение, стоимость и связь с родителями,
                чтобы поездка была понятной и спокойной.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-[24px] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.66))] p-5"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-sm font-black text-[color:var(--accent)]">
                      {item.badge}
                    </div>
                    <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--ink-soft)]">{item.description}</p>
                  </article>
                ))}
              </div>

              <div className="mt-5 rounded-[24px] border border-[color:var(--accent)]/18 bg-[color:var(--accent-soft)]/32 p-5">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[color:var(--accent)]">
                  Организатор
                </p>
                <p className="mt-2 text-lg font-black">{brand.legalName}</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--ink-soft)]">
                  Директор: {brand.director}. Юридический адрес: {brand.legalAddress}, ул. Козлова 25.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-5">
                <span className="eyebrow">FAQ</span>
                <h3 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
                  Частые вопросы родителей
                </h3>
              </div>

              <div className="space-y-3">
                {faqs.map((item, index) => {
                  const isOpen = openItem === index;

                  return (
                    <article key={item.id} className="rounded-[24px] border bg-white/82">
                      <button
                        type="button"
                        onClick={() => setOpenItem(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base font-black sm:text-lg">{item.question}</span>
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand)] text-lg font-black text-white">
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
        </div>
      </div>
    </section>
  );
}
