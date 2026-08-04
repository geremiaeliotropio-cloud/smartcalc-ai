"use client";

import { useMemo, useState } from "react";

export default function TredicesimaCalculator() {
  const [stipendioMensile, setStipendioMensile] = useState(2000);
  const [mesiLavorati, setMesiLavorati] = useState(12);

  const risultato = useMemo(() => {
    const tredicesima =
      (stipendioMensile / 12) * mesiLavorati;

    return {
      tredicesima,
    };
  }, [stipendioMensile, mesiLavorati]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          Calcolatore Tredicesima
        </h1>

        <p className="mt-4 max-w-3xl text-slate-400">
          Calcola una stima della tua tredicesima in base
          allo stipendio mensile e ai mesi lavorati.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <label className="mb-3 block text-lg font-semibold">
              Stipendio mensile lordo (€)
            </label>

            <input
              type="number"
              value={stipendioMensile}
              onChange={(e) =>
                setStipendioMensile(Number(e.target.value))
              }
              className="mb-8 w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <label className="mb-3 block text-lg font-semibold">
              Mesi lavorati
            </label>

            <input
              type="number"
              min={1}
              max={12}
              value={mesiLavorati}
              onChange={(e) =>
                setMesiLavorati(Number(e.target.value))
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
            />

          </div>

          <div className="rounded-3xl border border-cyan-500/30 bg-slate-900 p-8">

            <h2 className="mb-8 text-3xl font-bold text-cyan-400">
              Risultato
            </h2>

            <div>

              <p className="text-slate-400">
                Tredicesima stimata
              </p>

              <p className="mt-2 text-4xl font-bold text-green-400">
                € {risultato.tredicesima.toFixed(2)}
              </p>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}