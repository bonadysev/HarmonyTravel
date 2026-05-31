import type { Metadata } from "next";
import { brand } from "@/data";

export const metadata: Metadata = {
  title: "Политика в отношении обработки файлов cookie | Harmony Travel",
  description:
    "Политика ООО \"Гармония Трэвел\" в отношении обработки файлов cookie и использования Яндекс.Метрики на сайте.",
};

const cookieTypes = [
  {
    title: "Обязательные и технические",
    description:
      "нужны для корректной работы сайта, сохранения выбранных настроек cookie и стабильного отображения страниц.",
    consent: "не требуют отдельного согласия и не могут быть отключены средствами сайта",
  },
  {
    title: "Аналитические",
    description:
      "используются для оценки посещаемости сайта, анализа действий пользователей, работы Яндекс.Метрики, Вебвизора, карты кликов и статистики переходов.",
    consent: "используются только после согласия пользователя",
  },
];

const analyticsData = [
  "IP-адрес и примерное местоположение, определяемое по техническим данным",
  "тип устройства, операционная система, браузер и разрешение экрана",
  "источник перехода на сайт, дата и время посещения",
  "просмотренные страницы, клики, прокрутка, переходы и иные действия на сайте",
  "идентификаторы cookie и данные, необходимые для работы Яндекс.Метрики",
];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffef8,#f7fbfb)] py-12 sm:py-16">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[0_24px_80px_rgba(23,32,51,0.08)] sm:p-8 lg:p-10">
          <div className="space-y-5">
            <span className="eyebrow">{brand.legalName}</span>
            <h1 className="text-3xl font-black leading-tight sm:text-4xl">
              Политика в отношении обработки файлов cookie
            </h1>
            <p className="text-base leading-7 text-[color:var(--ink-soft)]">
              Настоящая политика объясняет, какие файлы cookie и аналогичные технологии могут
              использоваться на сайте {brand.shortName}, для каких целей они применяются и как
              пользователь может управлять своим выбором.
            </p>
          </div>

          <div className="mt-8 grid gap-8 text-sm leading-7 text-[color:var(--ink-soft)] sm:text-base">
            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">1. Оператор</h2>
              <p>{brand.legalName}</p>
              <p>Адрес: {brand.legalAddress}, ул. Козлова 25</p>
              <p>Email для обращений: {brand.email}</p>
              <p>Телефон: {brand.phone}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">2. Что такое cookie</h2>
              <p>
                Файлы cookie — это небольшие фрагменты данных, которые сайт или подключенные сервисы
                могут сохранять в браузере пользователя. Они помогают сайту работать корректно,
                запоминать настройки и собирать обезличенную статистику посещаемости.
              </p>
              <p>
                В настоящей политике под cookie также понимаются аналогичные технологии хранения данных
                в браузере, включая localStorage, если они используются для сохранения выбора пользователя
                или работы сервисов аналитики.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">3. Какие cookie используются</h2>
              <div className="grid gap-3">
                {cookieTypes.map((item) => (
                  <div key={item.title} className="rounded-[20px] bg-[color:var(--accent-soft)]/20 p-4">
                    <p className="font-black text-[color:var(--foreground)]">{item.title}</p>
                    <p className="mt-1">{item.description}</p>
                    <p className="mt-2 text-sm font-bold text-[color:var(--accent)]">{item.consent}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">4. Яндекс.Метрика</h2>
              <p>
                На сайте используется сервис веб-аналитики Яндекс.Метрика. Он подключается только при
                согласии пользователя на аналитические cookie. Сервис помогает анализировать посещаемость,
                клики, прокрутку, переходы по ссылкам, работу формы заявки и удобство страниц сайта.
              </p>
              <p>Яндекс.Метрика может обрабатывать следующие технические данные:</p>
              <ul className="space-y-2">
                {analyticsData.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                На сайте может быть включена функция Вебвизор. Она позволяет анализировать действия
                пользователя на страницах сайта, чтобы улучшать интерфейс и устранять сложности при
                отправке заявки.
              </p>
              <p>
                Подробнее об условиях работы сервиса можно прочитать на странице{" "}
                <a
                  href="https://yandex.ru/legal/metrica_termsofuse/ru/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-black text-[color:var(--accent)] underline underline-offset-4"
                >
                  Условия использования Яндекс.Метрики
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">5. Цели обработки cookie</h2>
              <ul className="space-y-2">
                {[
                  "обеспечение корректной работы сайта и его основных функций",
                  "сохранение выбора пользователя в окне cookie",
                  "анализ посещаемости сайта и действий пользователей",
                  "улучшение структуры страниц, формы заявки и пользовательского опыта",
                  "оценка эффективности ссылок, кнопок связи и информационных блоков сайта",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">6. Согласие и отказ</h2>
              <p>
                При первом входе на сайт пользователь видит окно управления cookie. Пользователь может
                принять все cookie, отклонить все необязательные cookie или настроить использование
                аналитических cookie отдельно.
              </p>
              <p>
                Согласие на аналитические cookie предоставляется путем нажатия кнопки “Принять” либо
                сохранения настроек с включенной аналитикой. При выборе “Отклонить” аналитические cookie
                и Яндекс.Метрика не подключаются.
              </p>
              <p>
                Пользователь может изменить или отозвать согласие, очистив cookie и данные сайта в
                настройках браузера. После очистки данных сайта окно выбора cookie появится повторно.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">7. Сроки хранения</h2>
              <p>
                Выбор пользователя по cookie хранится в браузере до его изменения или очистки данных
                сайта. Сроки хранения аналитических cookie Яндекс.Метрики определяются настройками
                сервиса Яндекса и браузера пользователя.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">8. Передача третьим лицам</h2>
              <p>
                При использовании аналитических cookie данные могут передаваться Яндексу для оказания
                услуг веб-аналитики. Такая обработка регулируется условиями использования Яндекс.Метрики
                и политиками Яндекса. Также при переходе на внешние сервисы, такие как Telegram,
                Instagram, Formspree или Google Maps, могут применяться правила cookie этих сервисов.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">9. Контакты</h2>
              <p>
                По вопросам использования cookie и обработки персональных данных можно обратиться по
                email {brand.email} или по телефону {brand.phone}.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
