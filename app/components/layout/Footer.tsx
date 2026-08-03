import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10">

        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="SmartCalc AI"
            width={180}
            height={45}
            className="hidden h-10 w-auto md:block"
          />

          <span className="text-2xl font-bold text-cyan-400 md:hidden">
            SmartCalc AI
          </span>
        </Link>

        <p className="max-w-xl text-center text-slate-400">
          Calcolatori intelligenti con AI per stipendi,
          mutui, prestiti, IVA, investimenti e finanza
          personale.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">

          <Link
            href="/privacy"
            className="transition hover:text-cyan-400"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="transition hover:text-cyan-400"
          >
            Termini
          </Link>

          <Link
            href="/cookies"
            className="transition hover:text-cyan-400"
          >
            Cookie
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-cyan-400"
          >
            Contatti
          </Link>

          <Link
            href="/about"
            className="transition hover:text-cyan-400"
          >
            Chi siamo
          </Link>

        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} SmartCalc AI ·
          Tutti i diritti riservati.
        </p>

      </div>
    </footer>
  );
}