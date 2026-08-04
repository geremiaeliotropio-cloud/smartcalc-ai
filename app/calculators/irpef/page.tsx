"use client";

import { useMemo, useState } from "react";

import AnalyzeWithAIButton from "../../components/ai/AnalyzeWithAIButton";

export default function IRPEFCalculator() {
  const [reddito, setReddito] = useState(30000);

  const risultato = useMemo(() => {
    let imposta = 0;

    if (reddito <= 28000) {
      imposta = reddito * 0.23;
    } else if (reddito <= 50000) {
      imposta =
        28000 * 0.23 +
        (reddito - 28000) * 0.35;
    } else {
      imposta =
        28000 * 0.23 +
        22000 * 0.35 +
        (reddito - 50000) * 0.43;
    }

    const netto = reddito - imposta;
    const aliquotaMedia =
      (imposta / reddito) * 100;

    return {
      imposta,
      netto,
      aliquotaMedia,
    };
  }, [reddito]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Calcolatore IRPEF
        </h1>

        <p className="mt-4 max-w-3xl text-slate-400">
          Calcola una stima dell'IRPEF e del
          reddito netto annuo.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <label className="mb-3 block text-lg font-semibold">
              Reddito lordo annuo (€)
            </label>

            <input
              type="number"
              value={reddito}
              onChange={(e) =>
                setReddito(Number(e.target.value))
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
            />
          </div>

          <div className="rounded-3xl border border-cyan-500/30 bg-slate-900 p-8">
            <h2 className="mb-8 text-3xl font-bold text-cyan-400">
              Risultato
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-slate-400">
                  IRPEF stimata
                </p>

                <p className="text-3xl font-bold">
                  € {risultato.imposta.toFixed(2)}
                </p>
              </div>

              <div>
                <p className="text-slate-400">
                  Reddito netto
                </p>

                <p className="text-3xl font-bold text-green-400">
                  € {risultato.netto.toFixed(2)}
                </p>
              </div>

              <div>
                <p className="text-slate-400">
                  Aliquota media
                </p>

                <p className="text-3xl font-bold text-cyan-400">
                  {risultato.aliquotaMedia.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <AnalyzeWithAIButton
            calculator="irpef"
            data={{
              reddito,
              imposta: risultato.imposta,
              netto: risultato.netto,
              aliquotaMedia:
                risultato.aliquotaMedia,
            }}
          />
        </div>
      </section>
    </main>
  );
}