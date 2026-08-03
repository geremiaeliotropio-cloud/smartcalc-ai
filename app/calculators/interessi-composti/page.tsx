"use client";

import { useState } from "react";

import CompoundForm from "../../components/compound/CompoundForm";
import CompoundResults from "../../components/compound/CompoundResults";
import CompoundChart from "../../components/compound/CompoundChart";

import PdfButton from "../../components/common/PdfButton";

import { exportCompoundPDF } from "../../lib/pdf";
import { generateCompoundData } from "../../lib/compound";
import { saveCompoundCalculation } from "../../lib/storage";

interface CompoundChartData {
  anno: number;
  investito: number;
  valore: number;
}

export default function CompoundInterestPage() {
  const [capitale, setCapitale] = useState("");
  const [versamento, setVersamento] = useState("");
  const [tasso, setTasso] = useState("");
  const [anni, setAnni] = useState("");

  const [error, setError] = useState("");

  const [totale, setTotale] = useState<number | null>(null);
  const [investito, setInvestito] = useState<number | null>(null);
  const [interessi, setInteressi] = useState<number | null>(null);

  const [grafico, setGrafico] = useState<
    CompoundChartData[]
  >([]);

  function calcola() {
    setError("");

    const capitaleNumber = Number(capitale);
    const versamentoNumber = Number(versamento);
    const tassoNumber = Number(tasso);
    const anniNumber = Number(anni);

    if (
      Number.isNaN(capitaleNumber) ||
      Number.isNaN(versamentoNumber) ||
      Number.isNaN(tassoNumber) ||
      Number.isNaN(anniNumber) ||
      capitaleNumber <= 0 ||
      anniNumber <= 0
    ) {
      setTotale(null);
      setInvestito(null);
      setInteressi(null);
      setGrafico([]);

      setError(
        "Inserisci un capitale e una durata validi."
      );

      return;
    }

    const r = tassoNumber / 100 / 12;
    const n = anniNumber * 12;

    let saldo = capitaleNumber;

    for (let i = 0; i < n; i++) {
      saldo = saldo * (1 + r) + versamentoNumber;
    }

    const investitoTotale =
      capitaleNumber + versamentoNumber * n;

    const interessiTotali =
      saldo - investitoTotale;

    setTotale(saldo);
    setInvestito(investitoTotale);
    setInteressi(interessiTotali);

    setGrafico(
      generateCompoundData(
        capitaleNumber,
        versamentoNumber,
        tassoNumber,
        anniNumber
      )
    );

    saveCompoundCalculation({
      capitale: capitaleNumber,
      versamento: versamentoNumber,
      tasso: tassoNumber,
      anni: anniNumber,

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

    setError("");

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

  const hasResults =
    totale !== null &&
    investito !== null &&
    interessi !== null;

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

        {error && (
          <div className="mt-8 rounded-2xl border border-red-500 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}

        {hasResults && (
          <>
            <CompoundResults
              investito={investito}
              interessi={interessi}
              totale={totale}
            />

            <CompoundChart
              data={grafico}
            />

            <div className="mt-8 flex justify-center">
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