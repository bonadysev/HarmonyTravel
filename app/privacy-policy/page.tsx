import type { Metadata } from "next";
import { brand } from "@/data";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных | Harmony Travel",
  description:
    "Политика обработки персональных данных ООО \"Гармония Трэвел\" для пользователей сайта и формы подбора тура.",
};

const collectedData = [
  "имя родителя",
  "возраст ребенка",
  "телефон или мессенджер",
  "email для обратной связи",
  "интересы и пожелания по туру",
  "информация о выбранном туре или выезде",
];

const processingPurposes = [
  "подбор подходящего тура и обратная связь по заявке",
  "уточнение деталей поездки, стоимости и формата участия",
  "ведение коммуникации по выбранному туру и организационным вопросам",
  "подготовка предложения, бронирования или дальнейшего оформления туристической услуги",
];

const thirdPartyCategories = [
  "сервис приема заявок Formspree, через который обрабатывается форма на сайте",
  "каналы и сервисы коммуникации, включая Telegram, если пользователь сам выбирает этот способ связи",
  "туристические партнеры, перевозчики и иные исполнители, если это нужно для организации поездки",
  "лица и организации, которым данные должны быть переданы по требованиям законодательства",
];

const subjectRights = [
  "получить информацию об обработке своих персональных данных",
  "требовать уточнения, изменения или удаления неточных либо избыточных данных",
  "отозвать согласие на обработку персональных данных",
  "обратиться с вопросом о порядке обработки и передачи данных третьим лицам",
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffef8,#f7fbfb)] py-12 sm:py-16">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[0_24px_80px_rgba(23,32,51,0.08)] sm:p-8 lg:p-10">
          <div className="space-y-5">
            <span className="eyebrow">Документ</span>
            <h1 className="text-3xl font-black leading-tight sm:text-4xl">
              Политика обработки персональных данных
            </h1>
            <p className="text-base leading-7 text-[color:var(--ink-soft)]">
              Настоящая политика определяет порядок обработки персональных данных пользователей сайта{" "}
              {brand.shortName} и применяется к информации, которую {brand.legalName} получает при
              заполнении формы подбора тура и при обращении через размещенные на сайте контакты.
            </p>
          </div>

          <div className="mt-8 grid gap-8 text-sm leading-7 text-[color:var(--ink-soft)] sm:text-base">
            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">1. Оператор данных</h2>
              <p>{brand.legalName}</p>
              <p>Адрес: {brand.legalAddress}, ул. Козлова 25</p>
              <p>Email для обращений: {brand.email}</p>
              <p>Телефон: {brand.phone}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">2. Какие данные мы собираем</h2>
              <ul className="space-y-2">
                {collectedData.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">3. Цели обработки</h2>
              <ul className="space-y-2">
                {processingPurposes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">4. Основания и срок обработки</h2>
              <p>
                Обработка персональных данных осуществляется на основании согласия пользователя,
                которое он предоставляет при заполнении формы на сайте. Данные обрабатываются только
                в объеме, необходимом для связи, подбора тура и дальнейшего сопровождения заявки.
              </p>
              <p>
                Персональные данные хранятся в течение срока, необходимого для достижения заявленных
                целей, либо до момента отзыва согласия, если иное не требуется законодательством.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">5. Передача третьим лицам</h2>
              <p>
                Для обработки заявок и организации туристических услуг данные могут передаваться
                следующим категориям лиц и сервисов:
              </p>
              <ul className="space-y-2">
                {thirdPartyCategories.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Форма заявки на сайте обрабатывается через внешний сервис Formspree. Если пользователь
                указывает телефон, мессенджер или самостоятельно переходит в Telegram для общения,
                дальнейшая коммуникация может вестись через соответствующий выбранный канал связи.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">6. Права пользователя</h2>
              <ul className="space-y-2">
                {subjectRights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">7. Как отозвать согласие</h2>
              <p>
                Для отзыва согласия, уточнения данных или направления иного обращения пользователь
                может написать на {brand.email} или связаться по телефону {brand.phone}. В обращении
                желательно указать имя, контакт для обратной связи и суть запроса.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
