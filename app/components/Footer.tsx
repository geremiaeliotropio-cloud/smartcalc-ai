import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-slate-400 md:flex-row">

        {/* Logo */}
        <div>
          <h3 className="text-lg font-bold text-white">
            SmartCalc <span className="text-cyan-400">AI</span>
          </h3>

          <p className="mt-1 text-sm">
            La piattaforma italiana per mutui, prestiti,
            finanza personale e calcolatori intelligenti.
          </p>
        </div>

        {/* Menu */}
        <div className="flex gap-6 text-sm">
          <Link
            href="/"
            className="transition hover:text-cyan-400"
          >
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

          <Link
            href="/privacy"
            className="transition hover:text-cyan-400"
          >
            Privacy
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} SmartCalc AI
        </div>

      </div>
    </footer>
  );
}