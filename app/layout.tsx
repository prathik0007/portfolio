import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { portfolio } from "@/data/portfolio";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.seo.siteUrl),
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    url: portfolio.seo.siteUrl,
    siteName: portfolio.name,
    images: [portfolio.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    images: [portfolio.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body className="font-sans flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-[80px]">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
