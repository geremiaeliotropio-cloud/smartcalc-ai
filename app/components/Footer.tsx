import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">
            SmartCalc
            <span className="text-cyan-400"> AI</span>
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Calcolatori intelligenti per finanza, lavoro,
            investimenti e molto altro.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <Link href="/about" className="hover:text-cyan-400 transition">
            Chi siamo
          </Link>

          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contatti
          </Link>

          <Link href="/privacy" className="hover:text-cyan-400 transition">
            Privacy
          </Link>

          <Link href="/cookies" className="hover:text-cyan-400 transition">
            Cookie
          </Link>

          <Link href="/terms" className="hover:text-cyan-400 transition">
            Termini
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SmartCalc AI • Tutti i diritti riservati.
      </div>
    </footer>
  );
}