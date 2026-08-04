"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/calculators",
      label: "Calcolatori",
    },
    {
      href: "/dashboard",
      label: "📊 Dashboard",
    },
    {
      href: "/ai",
      label: "🤖 AI",
    },
    {
      href: "/advisor",
      label: "🧠 Advisor",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="SmartCalc AI"
            width={42}
            height={42}
            className="h-10 w-10"
            priority
          />

          <span className="text-2xl font-extrabold text-cyan-400">
            SmartCalc AI
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-slate-200 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-white transition hover:bg-slate-800 md:hidden"
          aria-label="Apri menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {open && (
        <nav className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="flex flex-col p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-white transition hover:bg-slate-900 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}