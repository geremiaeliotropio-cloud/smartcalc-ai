"use client";

import { useState } from "react";

import PdfButton from "../../components/common/PdfButton";

import SalaryChart from "../../components/stipendio/SalaryChart";
import SalaryForm from "../../components/stipendio/SalaryForm";
import SalaryResults from "../../components/stipendio/SalaryResults";
import SalarySummary from "../../components/stipendio/SalarySummary";
import SalaryBreakdown from "../../components/stipendio/SalaryBreakdown";

import { exportSalaryPDF } from "../../lib/pdf";
import { calculateSalary } from "../../lib/salary";

export default function SalaryPage() {
  const [ral, setRal] = useState("");
  const [mensilita, setMensilita] = useState("13");

  const [contributi, setContributi] = useState<number | null>(null);
  const [imponibile, setImponibile] = useState<number | null>(null);
  const [irpef, setIrpef] = useState<number | null>(null);
  const [addizionali, setAddizionali] = useState<number | null>(null);

  const [nettoMensile, setNettoMensile] = useState<number | null>(null);
  const [nettoAnnuo, setNettoAnnuo] = useState<number | null>(null);
  const [trattenute, setTrattenute] = useState<number | null>(null);

  function calcolaStipendio() {
    const ralNumber = Number(ral);
    const mensilitaNumber = Number(mensilita);

    if (ralNumber <= 0) {
      alert("Inserisci una RAL valida.");
      return;
    }

    const risultato = calculateSalary(
      ralNumber,
      mensilitaNumber
    );

    setNettoAnnuo(risultato.nettoAnnuo);
    setNettoMensile(risultato.nettoMensile);
    setTrattenute(risultato.trattenute);

    setContributi(risultato.contributi);
    setImponibile(risultato.imponibile);
    setIrpef(risultato.irpef);
    setAddizionali(risultato.addizionali);
  }

  function scaricaPDF() {
    if (
      nettoMensile === null ||
      nettoAnnuo === null ||
      trattenute === null
    ) {
      return;
    }

    exportSalaryPDF(
  Number(ral),
  Number(mensilita),
  nettoMensile,
  nettoAnnuo,
  trattenute,
  contributi!,
  imponibile!,
  irpef!,
  addizionali!
);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Calcolatore{" "}
          <span className="text-cyan-400">
            Stipendio Netto
          </span>
        </h1>

        <p className="mt-4 text-slate-400">
          Calcola una stima dello stipendio netto partendo dalla RAL.
        </p>

        <SalaryForm
          ral={ral}
          mensilita={mensilita}
          setRal={setRal}
          setMensilita={setMensilita}
          onCalculate={calcolaStipendio}
        />

        {nettoMensile !== null &&
          nettoAnnuo !== null &&
          trattenute !== null &&
          contributi !== null &&
          imponibile !== null &&
          irpef !== null &&
          addizionali !== null && (
            <>
              <SalarySummary
                ral={Number(ral)}
                mensilita={Number(mensilita)}
              />

              <SalaryResults
                nettoMensile={nettoMensile}
                nettoAnnuo={nettoAnnuo}
                trattenute={trattenute}
              />

              <SalaryBreakdown
                contributi={contributi}
                imponibile={imponibile}
                irpef={irpef}
                addizionali={addizionali}
              />

              <SalaryChart
                netto={nettoAnnuo}
                trattenute={trattenute}
              />

              <div className="mt-8 flex justify-center">
                <PdfButton onClick={scaricaPDF} />
              </div>
            </>
          )}
      </section>
    </main>
  );
}