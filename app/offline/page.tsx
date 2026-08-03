import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-cyan-400">
          SmartCalc AI
        </h1>

        <h2 className="mt-8 text-4xl font-bold">
          Torniamo subito!
        </h2>

        <p className="mt-6 text-lg text-slate-400">
          SmartCalc AI è temporaneamente non disponibile
          per manutenzione o aggiornamenti.
        </p>

        <p className="mt-2 text-slate-500">
          Riprova tra qualche minuto.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Torna alla Home
        </Link>
      </div>
    </main>
  );
}