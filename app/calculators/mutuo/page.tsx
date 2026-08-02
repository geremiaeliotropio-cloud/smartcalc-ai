"use client";

import { useState } from "react";

import MortgageForm from "../../components/mutuo/MortgageForm";
import MortgageSummary from "../../components/mutuo/MortgageSummary";
import MortgageResults from "../../components/mutuo/MortgageResults";
import AmortizationChart from "../../components/mutuo/AmortizationChart";
import AmortizationTable from "../../components/mutuo/AmortizationTable";

import MortgagePdfButton from "../../components/pdf/MortgagePdfButton";

import { generateAmortization } from "../../lib/amortization";

export default function MutuoPage() {
  const [importo, setImporto] = useState("");
  const [tasso, setTasso] = useState("");
  const [anni, setAnni] = useState("");

  const [rata, setRata] = useState<number | null>(null);
  const [interessi, setInteressi] = useState<number | null>(null);
  const [totale, setTotale] = useState<number | null>(null);

  const [piano, setPiano] = useState<any[]>([]);

  function calcolaMutuo() {
    const P = Number(importo);
    const r = Number(tasso) / 100 / 12;
    const n = Number(anni) * 12;

    if (!P || !r || !n) {
      return;
    }

    const rataMensile =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const totalePagato = rataMensile * n;
    const interessiTotali = totalePagato - P;

    setRata(rataMensile);
    setInteressi(interessiTotali);
    setTotale(totalePagato);

    setPiano(
      generateAmortization(
        P,
        Number(tasso),
        Number(anni)
      )
    );
  }

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
          Calcola la rata mensile e visualizza il
          piano di ammortamento completo.
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

        {rata !== null &&
          interessi !== null &&
          totale !== null && (
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

              <MortgagePdfButton
                importo={Number(importo)}
                tasso={Number(tasso)}
                anni={Number(anni)}
                rata={rata}
                interessi={interessi}
                totale={totale}
                piano={piano}
              />

              <AmortizationTable
                data={piano}
              />
            </>
          )}
      </section>
    </main>
  );
}