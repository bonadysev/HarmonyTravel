import type { Metadata } from "next";
import Link from "next/link";
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
  "технические данные о посещении сайта, которые могут собираться сервисом Яндекс.Метрика: IP-адрес, сведения о браузере, устройстве, источнике перехода, действиях на страницах сайта и cookie-файлах",
];

const terms = [
  {
    title: "персональные данные",
    description:
      "любая информация, относящаяся к идентифицированному физическому лицу или физическому лицу, которое может быть идентифицировано.",
  },
  {
    title: "субъект персональных данных",
    description: "пользователь сайта или лицо, данные которого передаются через форму заявки.",
  },
  {
    title: "оператор",
    description: `${brand.legalName}, самостоятельно или совместно с иными лицами организующее и осуществляющее обработку персональных данных.`,
  },
  {
    title: "обработка персональных данных",
    description:
      "любое действие или совокупность действий с персональными данными, включая сбор, хранение, использование, передачу и удаление.",
  },
  {
    title: "уполномоченное лицо",
    description:
      "лицо или сервис, который может обрабатывать персональные данные по поручению оператора для приема заявок, коммуникации или организации туристических услуг.",
  },
];

const processingPurposes = [
  "подбор подходящего тура и обратная связь по заявке",
  "уточнение деталей поездки, стоимости и формата участия",
  "ведение коммуникации по выбранному туру и организационным вопросам",
  "подготовка предложения, бронирования или дальнейшего оформления туристической услуги",
  "анализ посещаемости сайта, улучшение структуры страниц, удобства формы заявки и качества коммуникации с пользователями",
];

const thirdPartyCategories = [
  "сервис приема заявок Formspree, через который обрабатывается форма на сайте",
  "сервис веб-аналитики Яндекс.Метрика, который используется для анализа посещаемости сайта и действий пользователей на страницах",
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
            <span className="eyebrow">{brand.legalName}</span>
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
              <h2 className="text-xl font-black text-[color:var(--foreground)]">2. Термины</h2>
              <div className="grid gap-3">
                {terms.map((term) => (
                  <div key={term.title} className="rounded-[20px] bg-[color:var(--accent-soft)]/20 p-4">
                    <p className="font-black text-[color:var(--foreground)]">{term.title}</p>
                    <p className="mt-1">{term.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">3. Какие данные мы собираем</h2>
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
              <h2 className="text-xl font-black text-[color:var(--foreground)]">4. Цели обработки</h2>
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
              <h2 className="text-xl font-black text-[color:var(--foreground)]">5. Основания и срок обработки</h2>
              <p>
                Обработка персональных данных осуществляется на основании согласия пользователя,
                которое он предоставляет при заполнении формы на сайте. Данные обрабатываются только
                в объеме, необходимом для связи, подбора тура и дальнейшего сопровождения заявки.
              </p>
              <p>
                Согласие предоставляется путем проставления отметки в чекбоксе формы заявки и
                последующего нажатия кнопки отправки формы.
              </p>
              <p>
                Персональные данные хранятся в течение срока, необходимого для достижения заявленных
                целей, либо до момента отзыва согласия, если иное не требуется законодательством.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">6. Передача третьим лицам</h2>
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
              <p>
                При использовании внешних сервисов, включая Formspree, Telegram, Instagram и Google Maps,
                может происходить передача данных за пределы Республики Беларусь. Такие сервисы действуют
                по собственным правилам обработки данных и могут применять собственные технические
                средства защиты и хранения информации.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">7. Яндекс.Метрика</h2>
              <p>
                На сайте используется сервис веб-аналитики Яндекс.Метрика. Он подключается после согласия
                пользователя на аналитические cookie и помогает оценивать посещаемость сайта, понимать,
                какие разделы интересны пользователям, улучшать структуру страниц и работу формы заявки.
              </p>
              <p>
                Яндекс.Метрика может собирать техническую информацию о посещении сайта, включая сведения
                о браузере, устройстве, IP-адресе, источнике перехода, времени посещения, просмотренных
                страницах, кликах, прокрутке, действиях на сайте и cookie-файлах. На сайте также включена
                функция Вебвизор, которая может фиксировать действия пользователя на страницах сайта для
                анализа удобства интерфейса.
              </p>
              <p>
                Данные, собираемые Яндекс.Метрикой, обрабатываются Яндексом в соответствии с условиями
                использования сервиса и политикой конфиденциальности Яндекса. Подробнее:{" "}
                <a
                  href="https://yandex.ru/legal/metrica_termsofuse/ru/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-black text-[color:var(--accent)] underline underline-offset-4"
                >
                  условия использования Яндекс.Метрики
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">8. Права пользователя</h2>
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
              <h2 className="text-xl font-black text-[color:var(--foreground)]">9. Как отозвать согласие</h2>
              <p>
                Для отзыва согласия, уточнения данных или направления иного обращения пользователь
                может написать на {brand.email}. В обращении желательно указать имя, контакт для обратной связи и суть запроса.
              </p>
              <p>
                Также желательно указать телефон или email, использованные при отправке заявки, чтобы
                компания могла корректно найти обращение. Запросы рассматриваются в сроки, предусмотренные
                законодательством Республики Беларусь.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">10. Использование cookie</h2>
              <p>
                Сайт может использовать cookie-файлы и аналогичные технологии, необходимые для работы
                Яндекс.Метрики, анализа посещаемости и улучшения удобства сайта. Пользователь может
                ограничить или отключить cookie в настройках браузера, однако это может повлиять на
                корректность работы отдельных функций сайта и сервисов аналитики.
              </p>
              <p>
                При первом входе на сайт пользователь может принять аналитические cookie, отклонить
                все необязательные cookie или настроить их использование. Подробнее:{" "}
                <Link
                  href="/cookie-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="font-black text-[color:var(--accent)] underline underline-offset-4"
                >
                  Политика в отношении обработки файлов cookie
                </Link>
                .
              </p>
              <p>
                При переходе на внешние сервисы, такие как Formspree, Telegram, Instagram или Google Maps,
                могут применяться правила и технологии этих сервисов.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[color:var(--foreground)]">11. Рекламные рассылки</h2>
              <p>
                Данные, указанные в форме заявки, не используются для автоматических рекламных рассылок
                без отдельного согласия пользователя. Контакты применяются для ответа на обращение,
                подбора тура и коммуникации по выбранной поездке.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
