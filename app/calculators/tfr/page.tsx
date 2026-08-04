"use client";

import { useMemo, useState } from "react";

import AnalyzeWithAIButton from "../../components/ai/AnalyzeWithAIButton";

export default function TFRCalculator() {
  const [ral, setRal] = useState(30000);
  const [anni, setAnni] = useState(10);

  const risultato = useMemo(() => {
    const tfrAnnuale = ral / 13.5;
    const tfrTotale = tfrAnnuale * anni;

    return {
      tfrAnnuale,
      tfrTotale,
    };
  }, [ral, anni]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Calcolatore TFR
        </h1>

        <p className="mt-4 max-w-3xl text-slate-400">
          Stima il Trattamento di Fine Rapporto maturato
          in base alla tua RAL e agli anni di lavoro.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <label className="mb-3 block text-lg font-semibold">
              RAL (€)
            </label>

            <input
              type="number"
              value={ral}
              onChange={(e) =>
                setRal(Number(e.target.value))
              }
              className="mb-8 w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <label className="mb-3 block text-lg font-semibold">
              Anni di lavoro
            </label>

            <input
              type="number"
              value={anni}
              min={1}
              onChange={(e) =>
                setAnni(Number(e.target.value))
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
            />
          </div>

          <div className="rounded-3xl border border-cyan-500/30 bg-slate-900 p-8">
            <h2 className="mb-8 text-3xl font-bold text-cyan-400">
              Risultato
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-slate-400">
                  TFR maturato ogni anno
                </p>

                <p className="text-3xl font-bold">
                  € {risultato.tfrAnnuale.toFixed(2)}
                </p>
              </div>

              <div>
                <p className="text-slate-400">
                  TFR totale stimato
                </p>

                <p className="text-4xl font-bold text-green-400">
                  € {risultato.tfrTotale.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <AnalyzeWithAIButton
            calculator="tfr"
            data={{
              ral,
              anni,
              tfrAnnuale:
                risultato.tfrAnnuale,
              tfrTotale:
                risultato.tfrTotale,
            }}
          />
        </div>
      </section>
    </main>
  );
}