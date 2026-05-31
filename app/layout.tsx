import type { Metadata } from "next";
import { CookieConsent } from "@/components/cookie-consent";
import { YandexMetrika } from "@/components/yandex-metrika";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harmony Travel Kids Tours | Детские туры с заботой и сопровождением",
  description:
    "Детские туры для школьников и подростков: безопасные маршруты, опытные сопровождающие и программы по возрастам.",
  openGraph: {
    title: "Harmony Travel Kids Tours",
    description:
      "Безопасные детские туры с сопровождением, понятной организацией и яркими программами для каникул.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
        <CookieConsent />
        <YandexMetrika />
      </body>
    </html>
  );
}
