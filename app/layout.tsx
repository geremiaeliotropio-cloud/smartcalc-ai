import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartcalc-ai.com"),

  applicationName: "SmartCalc AI",

  title: {
    default: "SmartCalc AI",
    template: "%s | SmartCalc AI",
  },

  description:
    "Calcolatori online con AI per stipendi, mutui, prestiti, interessi composti, IVA e finanza personale.",

  keywords: [
    "SmartCalc AI",
    "calcolatore stipendio",
    "stipendio netto",
    "calcolatore mutuo",
    "calcolatore prestito",
    "interessi composti",
    "calcolatore IVA",
    "finanza personale",
    "AI",
    "advisor finanziario",
  ],

  authors: [
    {
      name: "SmartCalc AI",
    },
  ],

  creator: "SmartCalc AI",

  publisher: "SmartCalc AI",

  category: "Finance",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "SmartCalc AI",

    description:
      "Calcolatori intelligenti con AI per stipendi, mutui, prestiti, investimenti e finanza personale.",

    url: "https://smartcalc-ai.com",

    siteName: "SmartCalc AI",

    locale: "it_IT",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "SmartCalc AI",

    description:
      "Calcolatori intelligenti con AI per stipendi, mutui, prestiti e investimenti.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-slate-950 text-white antialiased">
        <ScrollToTop />

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}