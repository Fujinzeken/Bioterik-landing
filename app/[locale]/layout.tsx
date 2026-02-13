import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  setRequestLocale,
  getTranslations,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, Locale } from "@/i18n/routing";
import "../globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: RootLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      images: [
        {
          url: "https://bioterik.netlify.app/og-image.png",
          width: 1200,
          height: 630,
          alt: "Open Graph Image",
        },
      ],
    },
    twitter: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      card: "summary_large_image",
      images: [
        {
          url: "https://bioterik.netlify.app/og-image.png",
          width: 1200,
          height: 630,
          alt: "Open Graph Image",
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the current locale
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      className={`${dmSerif.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
