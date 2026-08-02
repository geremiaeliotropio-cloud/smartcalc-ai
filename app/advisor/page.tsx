"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdvisorPage() {
  const [ral, setRal] = useState(35000);
  const [eta, setEta] = useState(30);
  const [risparmi, setRisparmi] = useState(10000);

  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState("");

  async function analyze() {
    setLoading(true);
    setReport("");

    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ral,
          eta,
          risparmi,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setReport(data.message);
    } catch (error) {
      setReport(
        error instanceof Error
          ? error.message
          : "Errore durante l'analisi."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          🤖 SmartCalc Advisor
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Inserisci alcune informazioni.
          SmartCalc AI analizzerà la tua situazione
          e ti consiglierà il percorso migliore.
        </p>

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="mb-8 text-2xl font-bold">
            La tua situazione
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <div>
              <label className="mb-2 block">
                RAL (€)
              </label>

              <input
                type="number"
                value={ral}
                onChange={(e) =>
                  setRal(Number(e.target.value))
                }
                className="w-full rounded-xl bg-slate-800 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block">
                Età
              </label>

              <input
                type="number"
                value={eta}
                onChange={(e) =>
                  setEta(Number(e.target.value))
                }
                className="w-full rounded-xl bg-slate-800 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block">
                Risparmi (€)
              </label>

              <input
                type="number"
                value={risparmi}
                onChange={(e) =>
                  setRisparmi(Number(e.target.value))
                }
                className="w-full rounded-xl bg-slate-800 p-3"
              />
            </div>

          </div>

          <button
            onClick={analyze}
            disabled={loading}
            className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading
              ? "Analisi in corso..."
              : "Analizza la mia situazione"}
          </button>

        </div>

        {report && (

          <div className="mt-10 rounded-3xl border border-cyan-500 bg-slate-900 p-8">

            <h2 className="text-3xl font-bold">
              📊 Report SmartCalc AI
            </h2>

            <div className="mt-8 whitespace-pre-wrap leading-8 text-slate-200">
              {report}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/calculators/stipendio"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
              >
                💼 Calcolatore Stipendio
              </Link>

              <Link
                href="/calculators/mutuo"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
              >
                🏠 Simula Mutuo
              </Link>

              <Link
                href="/calculators/prestito"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
              >
                💳 Simula Prestito
              </Link>

            </div>

          </div>

        )}

      </section>
    </main>
  );
}