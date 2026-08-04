"use client";

import { useState } from "react";

import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import PrimaryButton from "../../components/common/PrimaryButton";

import AnalyzeWithAIButton from "../../components/ai/AnalyzeWithAIButton";

import { saveVatCalculation } from "../../lib/storage";

export default function IvaPage() {
  const [importo, setImporto] = useState("");
  const [aliquota, setAliquota] = useState("22");

  const [error, setError] = useState("");

  const [iva, setIva] = useState<number | null>(null);
  const [totale, setTotale] = useState<number | null>(null);

  const formatEuro = (value: number) =>
    new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(value);

  function calcolaIVA() {
    setError("");

    const imponibile = Number(importo);
    const perc = Number(aliquota);

    if (
      Number.isNaN(imponibile) ||
      Number.isNaN(perc) ||
      imponibile <= 0 ||
      perc <= 0
    ) {
      setIva(null);
      setTotale(null);

      setError(
        "Inserisci un importo e un'aliquota validi."
      );

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

  const hasResults =
    iva !== null &&
    totale !== null;

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

        <div className="mt-10 space-y-6">
          <Input
            label="Importo (€)"
            type="number"
            value={importo}
            onChange={setImporto}
            placeholder="Es. 1000"
          />

          <Select
            label="Aliquota IVA"
            value={aliquota}
            onChange={setAliquota}
            options={[
              {
                value: "4",
                label: "IVA 4%",
              },
              {
                value: "5",
                label: "IVA 5%",
              },
              {
                value: "10",
                label: "IVA 10%",
              },
              {
                value: "22",
                label: "IVA 22%",
              },
            ]}
          />

          {error && (
            <div className="rounded-xl border border-red-500 bg-red-500/10 p-4 text-red-300">
              {error}
            </div>
          )}

          <PrimaryButton
            onClick={calcolaIVA}
            className="w-full"
          >
            Calcola IVA
          </PrimaryButton>
        </div>

        {hasResults && (
          <>
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

            <div className="mt-8 flex justify-center">
              <AnalyzeWithAIButton
                calculator="iva"
                data={{
                  imponibile: Number(importo),
                  aliquota: Number(aliquota),
                  iva,
                  totale,
                }}
              />
            </div>
          </>
        )}
      </section>
    </main>
  );
}