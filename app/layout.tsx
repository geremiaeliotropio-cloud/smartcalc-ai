import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartcalc-ai.com"),

  title: {
    default: "SmartCalc AI",
    template: "%s | SmartCalc AI",
  },

  description:
    "Calcolatori online con AI per stipendi, mutui, prestiti, IVA, pensione e finanza personale.",

  keywords: [
    "SmartCalc AI",
    "calcolatore stipendio",
    "calcolatore mutuo",
    "calcolatore prestito",
    "calcolatore IVA",
    "calcolatore pensione",
    "stipendio netto",
    "finanza personale",
    "AI",
  ],

  authors: [
    {
      name: "SmartCalc AI",
    },
  ],

  creator: "SmartCalc AI",

  openGraph: {
    title: "SmartCalc AI",
    description:
      "Calcolatori intelligenti con AI per la finanza personale.",
    type: "website",
    locale: "it_IT",
    siteName: "SmartCalc AI",
  },

  twitter: {
    card: "summary_large_image",
    title: "SmartCalc AI",
    description:
      "Calcolatori intelligenti con AI.",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-slate-950 text-white antialiased">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}