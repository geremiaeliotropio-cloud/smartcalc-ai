"use client";

import { useState } from "react";

import CompoundForm from "../../components/compound/CompoundForm";
import CompoundResults from "../../components/compound/CompoundResults";
import CompoundChart from "../../components/compound/CompoundChart";

import PdfButton from "../../components/common/PdfButton";

import { exportCompoundPDF } from "../../lib/pdf";
import { generateCompoundData } from "../../lib/compound";
import { saveCompoundCalculation } from "../../lib/storage";

export default function CompoundInterestPage() {
  const [capitale, setCapitale] = useState("");
  const [versamento, setVersamento] = useState("");
  const [tasso, setTasso] = useState("");
  const [anni, setAnni] = useState("");

  const [totale, setTotale] = useState<number | null>(null);
  const [investito, setInvestito] = useState<number | null>(null);
  const [interessi, setInteressi] = useState<number | null>(null);

  const [grafico, setGrafico] = useState<any[]>([]);

  function calcola() {
    const P = Number(capitale);
    const M = Number(versamento);
    const r = Number(tasso) / 100 / 12;
    const n = Number(anni) * 12;

    if (P <= 0 || n <= 0) {
      alert("Inserisci un capitale e una durata validi.");
      return;
    }

    let saldo = P;

    for (let i = 0; i < n; i++) {
      saldo = saldo * (1 + r) + M;
    }

    const investitoTotale = P + M * n;
    const interessiTotali = saldo - investitoTotale;

    setTotale(saldo);
    setInvestito(investitoTotale);
    setInteressi(interessiTotali);

    setGrafico(
      generateCompoundData(
        P,
        M,
        Number(tasso),
        Number(anni)
      )
    );

    saveCompoundCalculation({
      capitale: P,
      versamento: M,
      tasso: Number(tasso),
      anni: Number(anni),

      investito: investitoTotale,
      interessi: interessiTotali,
      totale: saldo,

      createdAt: new Date().toISOString(),
    });
  }

  function reset() {
    setCapitale("");
    setVersamento("");
    setTasso("");
    setAnni("");

    setTotale(null);
    setInvestito(null);
    setInteressi(null);
    setGrafico([]);
  }

  function scaricaPDF() {
    if (
      totale === null ||
      investito === null ||
      interessi === null
    ) {
      return;
    }

    exportCompoundPDF(
      Number(capitale),
      Number(versamento),
      Number(tasso),
      Number(anni),
      investito,
      interessi,
      totale
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Interessi{" "}
          <span className="text-cyan-400">
            Composti
          </span>
        </h1>

        <p className="mt-4 text-slate-400">
          Simula la crescita del tuo investimento
          nel tempo.
        </p>

        <CompoundForm
          capitale={capitale}
          versamento={versamento}
          tasso={tasso}
          anni={anni}
          setCapitale={setCapitale}
          setVersamento={setVersamento}
          setTasso={setTasso}
          setAnni={setAnni}
          onCalculate={calcola}
          onReset={reset}
        />

        {totale !== null &&
          investito !== null &&
          interessi !== null && (
            <>
              <CompoundResults
                investito={investito}
                interessi={interessi}
                totale={totale}
              />

              <CompoundChart
                data={grafico}
              />

              <div className="mt-8">
                <PdfButton
                  onClick={scaricaPDF}
                />
              </div>
            </>
          )}
      </section>
    </main>
  );
}