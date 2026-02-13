import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "BIOTERIK PHARMA | Pharmaceutical Supplements with Indena Ingredients",
  description:
    "Science-backed supplements with Indena ingredients. Products created by a team of pharmacists using standardized extracts of the highest pharmaceutical quality. Proven efficacy. Transparent formulas.",
  keywords: [
    "pharmaceutical supplements",
    "Indena ingredients",
    "standardized extracts",
    "BIOTERIK",
    "pharmacist-formulated",
    "bioavailability",
  ],
  openGraph: {
    title:
      "BIOTERIK PHARMA | Pharmaceutical Supplements with Indena Ingredients",
    description:
      "Science-backed supplements with Indena ingredients. Trusted by healthcare professionals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
