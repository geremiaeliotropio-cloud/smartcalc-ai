"use client";

import { useState } from "react";

export default function PrestitoPage() {
  const [importo, setImporto] = useState("");
  const [tasso, setTasso] = useState("");
  const [anni, setAnni] = useState("");

  const [rata, setRata] = useState<number | null>(null);
  const [interessi, setInteressi] = useState<number | null>(null);
  const [totale, setTotale] = useState<number | null>(null);

  const formatEuro = (value: number) =>
    new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(value);

  function calcolaPrestito() {
    const P = Number(importo);
    const r = Number(tasso) / 100 / 12;
    const n = Number(anni) * 12;

    if (!P || !r || !n) return;

    const rataMensile =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const totalePagato = rataMensile * n;
    const interessiTotali = totalePagato - P;

    setRata(rataMensile);
    setTotale(totalePagato);
    setInteressi(interessiTotali);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          Calcolatore{" "}
          <span className="text-cyan-400">
            Prestito
          </span>
        </h1>

        <p className="mt-4 text-slate-400">
          Calcola la rata mensile del tuo prestito.
        </p>

        <div className="mt-10 space-y-5">

          <input
            type="number"
            placeholder="Importo (€)"
            value={importo}
            onChange={(e) => setImporto(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
          />

          <input
            type="number"
            placeholder="Tasso annuo (%)"
            value={tasso}
            onChange={(e) => setTasso(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
          />

          <input
            type="number"
            placeholder="Durata (anni)"
            value={anni}
            onChange={(e) => setAnni(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
          />

          <button
            onClick={calcolaPrestito}
            className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Calcola prestito
          </button>

        </div>

        {rata !== null && (
          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="text-3xl font-bold text-cyan-400">
              {formatEuro(rata)}
            </h2>

            <p className="mt-2 text-slate-400">
              Rata mensile
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-xl bg-slate-800 p-5">
                <p className="text-slate-400">
                  Interessi Totali
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {formatEuro(interessi!)}
                </h3>
              </div>

              <div className="rounded-xl bg-slate-800 p-5">
                <p className="text-slate-400">
                  Totale Restituito
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {formatEuro(totale!)}
                </h3>
              </div>

            </div>

          </div>
        )}

      </section>
    </main>
  );
}