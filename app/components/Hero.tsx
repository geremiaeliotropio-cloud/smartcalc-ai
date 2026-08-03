import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
        <span className="mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          🚀 Il futuro dei calcolatori intelligenti
        </span>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Tutti i calcolatori
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            potenziati dall&apos;Intelligenza Artificiale
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-slate-300">
          Oltre 300 strumenti intelligenti con simulazioni avanzate,
          grafici interattivi e supporto AI per studio, lavoro e finanza.
        </p>

        <div className="mt-12 flex w-full max-w-3xl items-center rounded-2xl border border-slate-700 bg-slate-900/80 p-2 backdrop-blur">
          <Search
            className="ml-3 text-slate-500"
            size={20}
          />

          <input
            type="text"
            placeholder="Cerca un calcolatore..."
            className="flex-1 bg-transparent px-4 py-3 outline-none"
          />

          <button className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
            Cerca
          </button>
        </div>

        <div className="mt-20 grid w-full max-w-4xl grid-cols-3 gap-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <h3 className="text-4xl font-bold text-cyan-400">
              300+
            </h3>

            <p className="mt-2 text-slate-400">
              Calcolatori
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <h3 className="text-4xl font-bold text-cyan-400">
              50K+
            </h3>

            <p className="mt-2 text-slate-400">
              Utenti
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <h3 className="text-4xl font-bold text-cyan-400">
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