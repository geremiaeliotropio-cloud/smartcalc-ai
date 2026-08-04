"use client";

import { useState } from "react";

import AnalyzeWithAIButton from "../../components/ai/AnalyzeWithAIButton";

export default function PensionPage() {
  const [stipendio, setStipendio] = useState("");
  const [eta, setEta] = useState("");
  const [contributi, setContributi] = useState("");

  const [pensione, setPensione] =
    useState<number | null>(null);

  function calcolaPensione() {
    const stipendioNumber = Number(stipendio);
    const anni = Number(contributi);

    if (
      stipendioNumber <= 0 ||
      anni <= 0
    ) {
      alert("Inserisci dati validi.");
      return;
    }

    const risultato =
      stipendioNumber *
      0.7 *
      (anni / 40);

    setPensione(risultato);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Calcolatore{" "}
          <span className="text-cyan-400">
            Pensione
          </span>
        </h1>

        <p className="mt-4 text-slate-400">
          Simula una stima della tua pensione
          mensile.
        </p>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <input
              type="number"
              placeholder="Stipendio netto"
              value={stipendio}
              onChange={(e) =>
                setStipendio(e.target.value)
              }
              className="rounded-xl bg-slate-800 p-4 outline-none"
            />

            <input
              type="number"
              placeholder="Età"
              value={eta}
              onChange={(e) =>
                setEta(e.target.value)
              }
              className="rounded-xl bg-slate-800 p-4 outline-none"
            />

            <input
              type="number"
              placeholder="Anni contributi"
              value={contributi}
              onChange={(e) =>
                setContributi(e.target.value)
              }
              className="rounded-xl bg-slate-800 p-4 outline-none"
            />
          </div>

          <button
            type="button"
            onClick={calcolaPensione}
            className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Calcola
          </button>

          {pensione !== null && (
            <>
              <div className="mt-10 rounded-2xl bg-slate-800 p-8">
                <h2 className="text-2xl font-bold">
                  Pensione stimata
                </h2>

                <p className="mt-4 text-5xl font-bold text-cyan-400">
                  {new Intl.NumberFormat(
                    "it-IT",
                    {
                      style: "currency",
                      currency: "EUR",
                    }
                  ).format(pensione)}
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <AnalyzeWithAIButton
                  calculator="pensione"
                  data={{
                    stipendio: Number(stipendio),
                    eta: Number(eta),
                    anniContributi:
                      Number(contributi),
                    pensioneStimata:
                      pensione,
                  }}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}