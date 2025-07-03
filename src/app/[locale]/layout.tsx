// app/[locale]/layout.tsx
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Cairo } from "next/font/google";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

// ✅ الخط: Dosis
const cairo = Cairo({
  variable: "--font-cairo", // استخدم متغير مخصص لهذا الخط
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// ✅ Root Layout داخل مجلد [locale]
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  // التحقق من صلاحية اللغة
  if (!hasLocale(routing.locales, locale)) {
    redirect("/en");
  }

  // جلب رسائل الترجمة
  const messages = await getMessages();



  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${cairo.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>

          <Header />
          {children}
          <Footer />

        </NextIntlClientProvider>
      </body>
    </html>
  );
}