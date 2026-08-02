"use client";

import { useState } from "react";

import { saveVatCalculation } from "../../lib/storage";

export default function IvaPage() {
  const [importo, setImporto] = useState("");
  const [aliquota, setAliquota] = useState("22");

  const [iva, setIva] = useState<number | null>(null);
  const [totale, setTotale] = useState<number | null>(null);

  const formatEuro = (value: number) =>
    new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(value);

  function calcolaIVA() {
    const imponibile = Number(importo);
    const perc = Number(aliquota);

    if (!imponibile || !perc) {
      return;
    }

    const valoreIVA = (imponibile * perc) / 100;
    const totaleConIVA = imponibile + valoreIVA;

    setIva(valoreIVA);
    setTotale(totaleConIVA);

    saveVatCalculation({
      imponibile,
      aliquota: perc,

      iva: valoreIVA,
      totale: totaleConIVA,

      createdAt: new Date().toISOString(),
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Calcolatore{" "}
          <span className="text-cyan-400">
            IVA
          </span>
        </h1>

        <p className="mt-4 text-slate-400">
          Calcola rapidamente IVA e totale.
        </p>

        <div className="mt-10 space-y-5">
          <input
            type="number"
            placeholder="Importo (€)"
            value={importo}
            onChange={(e) =>
              setImporto(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
          />

          <select
            value={aliquota}
            onChange={(e) =>
              setAliquota(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4"
          >
            <option value="4">
              IVA 4%
            </option>

            <option value="5">
              IVA 5%
            </option>

            <option value="10">
              IVA 10%
            </option>

            <option value="22">
              IVA 22%
            </option>
          </select>

          <button
            onClick={calcolaIVA}
            className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Calcola IVA
          </button>
        </div>

        {iva !== null &&
          totale !== null && (
            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-slate-800 p-5">
                  <p className="text-slate-400">
                    IVA
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-cyan-400">
                    {formatEuro(iva)}
                  </h3>
                </div>

                <div className="rounded-xl bg-slate-800 p-5">
                  <p className="text-slate-400">
                    Totale
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {formatEuro(totale)}
                  </h3>
                </div>
              </div>
            </div>
          )}
      </section>
    </main>
  );
}