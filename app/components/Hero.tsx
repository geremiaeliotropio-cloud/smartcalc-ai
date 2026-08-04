import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Sfondo luminoso */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl md:h-[500px] md:w-[500px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center md:py-28">
        {/* Badge */}
        <span className="mb-5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-300 md:mb-6 md:text-sm">
          🚀 Il futuro dei calcolatori intelligenti
        </span>

        {/* Titolo */}
        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
          Tutti i calcolatori
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            potenziati
            <br />
            dall&apos;Intelligenza Artificiale
          </span>
        </h1>

        {/* Descrizione */}
        <p className="mt-6 max-w-3xl px-2 text-base text-slate-300 md:mt-8 md:text-lg">
          Oltre 300 strumenti intelligenti con simulazioni avanzate,
          grafici interattivi e supporto AI per studio, lavoro e finanza.
        </p>

        {/* Ricerca */}
        <div className="mt-10 flex w-full max-w-3xl items-center rounded-2xl border border-slate-700 bg-slate-900/80 p-2 backdrop-blur md:mt-12">
          <Search
            className="ml-2 shrink-0 text-slate-500 md:ml-3"
            size={20}
          />

          <input
            type="text"
            placeholder="Cerca un calcolatore..."
            className="flex-1 bg-transparent px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none md:px-4 md:text-base"
          />

          <button
            type="button"
            className="rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:px-8 md:text-base"
          >
            Cerca
          </button>
        </div>

        {/* Statistiche */}
        <div className="mt-12 grid w-full max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <h3 className="text-3xl font-bold text-cyan-400 md:text-4xl">
              300+
            </h3>

            <p className="mt-2 text-slate-400">
              Calcolatori
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <h3 className="text-3xl font-bold text-cyan-400 md:text-4xl">
              50K+
            </h3>

            <p className="mt-2 text-slate-400">
              Utenti
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur sm:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-bold text-cyan-400 md:text-4xl">
              99.9%
            </h3>

            <p className="mt-2 text-slate-400">
              Precisione
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}