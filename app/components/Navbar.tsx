import Link from "next/link";
import { Calculator, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-400">
            <Calculator size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold">
              SmartCalc <span className="text-cyan-400">AI</span>
            </h1>

            <p className="text-xs text-slate-400">
              Calcolatori intelligenti
            </p>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <Link href="/" className="transition hover:text-cyan-400">
            Home
          </Link>

          <Link
            href="/calculators"
            className="transition hover:text-cyan-400"
          >
            Calcolatori
          </Link>

          <Link
            href="/about"
            className="transition hover:text-cyan-400"
          >
            Chi siamo
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-cyan-400"
          >
            Contatti
          </Link>
        </nav>

        {/* Azioni */}
        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-slate-700 p-2 transition hover:border-cyan-400 hover:text-cyan-400">
            <Moon size={18} />
          </button>

          <Link
            href="/calculators"
            className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Inizia
          </Link>
        </div>

      </div>
    </header>
  );
}