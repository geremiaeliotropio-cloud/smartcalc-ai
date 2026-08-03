import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="SmartCalc AI"
            width={220}
            height={55}
            priority
            className="hidden h-10 w-auto md:block"
          />

          <span className="text-2xl font-bold text-cyan-400 md:hidden">
            SmartCalc AI
          </span>
        </Link>

        <nav className="flex items-center gap-8">

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
            href="/dashboard"
            className="transition hover:text-cyan-400"
          >
            📊 Dashboard
          </Link>

          <Link
            href="/ai"
            className="transition hover:text-cyan-400"
          >
            🤖 AI
          </Link>

          <Link
            href="/advisor"
            className="transition hover:text-cyan-400"
          >
            🧠 Advisor
          </Link>

        </nav>

      </div>
    </header>
  );
}