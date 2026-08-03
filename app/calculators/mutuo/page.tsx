"use client";

import { useState } from "react";

import MortgageForm from "../../components/mutuo/MortgageForm";
import MortgageSummary from "../../components/mutuo/MortgageSummary";
import MortgageResults from "../../components/mutuo/MortgageResults";
import AmortizationChart from "../../components/mutuo/AmortizationChart";
import AmortizationTable from "../../components/mutuo/AmortizationTable";

import MortgagePdfButton from "../../components/pdf/MortgagePdfButton";

import { generateAmortization } from "../../lib/amortization";
import { saveMortgageCalculation } from "../../lib/storage";

interface AmortizationRow {
  rata: number;
  capitale: number;
  interessi: number;
  residuo: number;
}

export default function MutuoPage() {
  const [importo, setImporto] = useState("");
  const [tasso, setTasso] = useState("");
  const [anni, setAnni] = useState("");

  const [error, setError] = useState("");

  const [rata, setRata] = useState<number | null>(null);
  const [interessi, setInteressi] = useState<number | null>(null);
  const [totale, setTotale] = useState<number | null>(null);

  const [piano, setPiano] = useState<AmortizationRow[]>([]);

  function calcolaMutuo() {
    setError("");

    const importoNumber = Number(importo);
    const tassoNumber = Number(tasso);
    const anniNumber = Number(anni);

    if (
      Number.isNaN(importoNumber) ||
      Number.isNaN(tassoNumber) ||
      Number.isNaN(anniNumber) ||
      importoNumber <= 0 ||
      tassoNumber <= 0 ||
      anniNumber <= 0
    ) {
      setRata(null);
      setInteressi(null);
      setTotale(null);
      setPiano([]);

      setError(
        "Inserisci importo, tasso e durata validi."
      );

      return;
    }

    const r = tassoNumber / 100 / 12;
    const n = anniNumber * 12;

    const rataMensile =
      (importoNumber *
        r *
        Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const totalePagato = rataMensile * n;
    const interessiTotali =
      totalePagato - importoNumber;

    setRata(rataMensile);
    setInteressi(interessiTotali);
    setTotale(totalePagato);

    const pianoCalcolato =
      generateAmortization(
        importoNumber,
        tassoNumber,
        anniNumber
      );

    setPiano(pianoCalcolato);

    saveMortgageCalculation({
      importo: importoNumber,
      tasso: tassoNumber,
      anni: anniNumber,
      rata: rataMensile,
      interessi: interessiTotali,
      totale: totalePagato,
      createdAt: new Date().toISOString(),
    });
  }

  const hasResults =
    rata !== null &&
    interessi !== null &&
    totale !== null;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Calcolatore{" "}
          <span className="text-cyan-400">
            Mutuo
          </span>
        </h1>

        <p className="mt-4 text-slate-400">
          Calcola la rata mensile e visualizza
          il piano di ammortamento completo.
        </p>

        <MortgageForm
          importo={importo}
          tasso={tasso}
          anni={anni}
          setImporto={setImporto}
          setTasso={setTasso}
          setAnni={setAnni}
          onCalculate={calcolaMutuo}
        />

        {error && (
          <div className="mt-8 rounded-2xl border border-red-500 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}        {hasResults && (
          <>
            <MortgageSummary
              importo={Number(importo)}
              tasso={Number(tasso)}
              anni={Number(anni)}
            />

            <MortgageResults
              rata={rata}
              interessi={interessi}
              totale={totale}
            />

            <AmortizationChart
              data={piano}
            />

            <div className="mt-8 flex justify-center">
              <MortgagePdfButton
                importo={Number(importo)}
                tasso={Number(tasso)}
                anni={Number(anni)}
                rata={rata}
                interessi={interessi}
                totale={totale}
                piano={piano}
              />
            </div>

            <AmortizationTable
              data={piano}
            />
          </>
        )}
      </section>
    </main>
  );
}