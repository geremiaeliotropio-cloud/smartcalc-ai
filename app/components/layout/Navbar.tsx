"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "🏠 Home" },
    { href: "/calculators", label: "🧮 Calcolatori" },
    { href: "/dashboard", label: "📊 Dashboard" },
    { href: "/ai", label: "🤖 AI" },
    { href: "/advisor", label: "🧠 Advisor" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="SmartCalc AI"
            width={42}
            height={42}
            className="h-9 w-9 md:h-11 md:w-11"
            priority
          />

          <span className="text-lg font-extrabold text-cyan-400 sm:text-xl md:text-2xl">
            SmartCalc AI
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 text-slate-200 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Apri menu"
          className="rounded-xl p-3 transition hover:bg-slate-800 md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {open && (
        <nav className="border-t border-slate-800 bg-slate-950 md:hidden">

          <div className="space-y-2 p-4">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl bg-slate-900 px-5 py-4 text-base font-medium transition-all duration-300 hover:bg-slate-800 hover:text-cyan-400"
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