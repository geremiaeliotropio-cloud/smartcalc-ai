import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Sfondo */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl md:h-[600px] md:w-[600px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 py-12 text-center md:px-6 md:py-28">

        {/* Badge */}
        <span className="mb-5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-medium text-cyan-300 md:mb-7 md:text-sm">
          🚀 Oltre 300 calcolatori intelligenti con AI
        </span>

        {/* Titolo */}
        <h1 className="max-w-5xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
          Tutti i tuoi
          <br />

          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            calcolatori
            <br />
            intelligenti
          </span>
        </h1>

        {/* Descrizione */}
        <p className="mt-6 max-w-2xl px-3 text-[15px] leading-7 text-slate-300 md:mt-8 md:px-0 md:text-lg">
          Stipendi, mutui, prestiti, investimenti, IVA,
          pensione e centinaia di altri strumenti con
          supporto dell'Intelligenza Artificiale.
        </p>

        {/* Ricerca */}
        <div className="mt-10 flex w-full max-w-3xl items-center rounded-3xl border border-slate-700 bg-slate-900/80 p-3 shadow-2xl backdrop-blur">

          <Search
            size={22}
            className="ml-2 shrink-0 text-slate-500"
          />

          <input
            type="text"
            placeholder="Cerca un calcolatore..."
            className="flex-1 bg-transparent px-4 py-3 text-base text-white placeholder:text-slate-500 focus:outline-none"
          />

          <button
            type="button"
            className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
          >
            Cerca
          </button>

        </div>

        {/* Statistiche */}
        <div className="mt-14 grid w-full max-w-5xl gap-5 md:mt-20 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40">

            <h3 className="text-4xl font-bold text-cyan-400">
              300+
            </h3>

            <p className="mt-3 text-slate-400">
              Calcolatori
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40">

            <h3 className="text-4xl font-bold text-cyan-400">
              AI
            </h3>

            <p className="mt-3 text-slate-400">
              Consulente intelligente
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40">

            <h3 className="text-4xl font-bold text-cyan-400">
              24/7
            </h3>

            <p className="mt-3 text-slate-400">
              Sempre disponibile
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}