import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-2xl text-center">
        <h1 className="text-8xl font-extrabold text-cyan-400">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold">
          Pagina non trovata
        </h2>

        <p className="mt-6 text-lg text-slate-400">
          La pagina che stai cercando non esiste oppure è
          stata spostata.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link
            href="/"
            className="rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            🏠 Torna alla Home
          </Link>

          <Link
            href="/calculators"
            className="rounded-xl border border-cyan-500 px-6 py-4 font-semibold transition hover:bg-slate-900"
          >
            🧮 Tutti i calcolatori
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-700 px-6 py-4 font-semibold transition hover:bg-slate-900"
          >
            📊 Dashboard
          </Link>

          <Link
            href="/advisor"
            className="rounded-xl border border-slate-700 px-6 py-4 font-semibold transition hover:bg-slate-900"
          >
            🤖 SmartCalc Advisor
          </Link>
        </div>
      </div>
    </main>
  );
}