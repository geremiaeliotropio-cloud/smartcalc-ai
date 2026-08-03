"use client";

import { useMemo, useState } from "react";

import SalaryForm from "../../components/stipendio/SalaryForm";
import SalarySummary from "../../components/stipendio/SalarySummary";
import SalaryResults from "../../components/stipendio/SalaryResults";
import SalaryBreakdown from "../../components/stipendio/SalaryBreakdown";
import SalaryInsights from "../../components/stipendio/SalaryInsights";
import SalaryAdvice from "../../components/stipendio/SalaryAdvice";
import SalaryChart from "../../components/stipendio/SalaryChart";
import AIAdvisor from "../../components/stipendio/AIAdvisor";

import SalaryPdfButton from "../../components/pdf/SalaryPdfButton";
import AIButton from "../../components/ai/AIButton";
import AIResponse from "../../components/ai/AIResponse";

import { calculateSalary } from "../../lib/salary";
import { explainCalculation } from "../../lib/ai";
import { generateSalaryAdvice } from "../../lib/advisor";
import { exportSalaryPDF } from "../../lib/pdf";
import { saveSalaryCalculation } from "../../lib/storage";

export default function SalaryPage() {
  const [ral, setRal] = useState("");
  const [mensilita, setMensilita] = useState("13");

  const [contributi, setContributi] =
    useState<number | null>(null);

  const [imponibile, setImponibile] =
    useState<number | null>(null);

  const [irpef, setIrpef] =
    useState<number | null>(null);

  const [addizionali, setAddizionali] =
    useState<number | null>(null);

  const [nettoMensile, setNettoMensile] =
    useState<number | null>(null);

  const [nettoAnnuo, setNettoAnnuo] =
    useState<number | null>(null);

  const [trattenute, setTrattenute] =
    useState<number | null>(null);

  const [aiLoading, setAiLoading] =
    useState(false);

  const [aiResponse, setAiResponse] =
    useState("");

  function calcolaStipendio() {
    const ralNumber = Number(ral);
    const mensilitaNumber = Number(mensilita);

    if (
      Number.isNaN(ralNumber) ||
      ralNumber <= 0
    ) {
      window.alert(
        "Inserisci una RAL valida."
      );
      return;
    }

    const risultato = calculateSalary(
      ralNumber,
      mensilitaNumber
    );

    setNettoMensile(
      risultato.nettoMensile
    );
    setNettoAnnuo(
      risultato.nettoAnnuo
    );
    setTrattenute(
      risultato.trattenute
    );

    setContributi(
      risultato.contributi
    );
    setImponibile(
      risultato.imponibile
    );
    setIrpef(
      risultato.irpef
    );
    setAddizionali(
      risultato.addizionali
    );

    saveSalaryCalculation({
      ral: ralNumber,
      mensilita: mensilitaNumber,

      nettoMensile:
        risultato.nettoMensile,

      nettoAnnuo:
        risultato.nettoAnnuo,

      trattenute:
        risultato.trattenute,

      contributi:
        risultato.contributi,

      imponibile:
        risultato.imponibile,

      irpef:
        risultato.irpef,

      addizionali:
        risultato.addizionali,

      createdAt:
        new Date().toISOString(),
    });

    setAiResponse("");
  }

  async function chiediAI() {
    if (
      nettoMensile === null ||
      nettoAnnuo === null ||
      trattenute === null ||
      contributi === null ||
      imponibile === null ||
      irpef === null ||
      addizionali === null
    ) {
      return;
    }

    try {
      setAiLoading(true);

      const risposta =
        await explainCalculation({
          calculator: "stipendio",
          data: {
            ral: Number(ral),
            mensilita: Number(
              mensilita
            ),
            nettoMensile,
            nettoAnnuo,
            contributi,
            imponibile,
            irpef,
            addizionali,
            trattenute,
          },
        });

      setAiResponse(risposta);
    } catch (error) {
      setAiResponse(
        error instanceof Error
          ? error.message
          : "Si è verificato un errore durante la richiesta."
      );
    } finally {
      setAiLoading(false);
    }
  }

  function scaricaPDF() {
    if (
      nettoMensile === null ||
      nettoAnnuo === null ||
      trattenute === null ||
      contributi === null ||
      imponibile === null ||
      irpef === null ||
      addizionali === null
    ) {
      return;
    }

    exportSalaryPDF(
      Number(ral),
      Number(mensilita),
      nettoMensile,
      nettoAnnuo,
      trattenute,
      contributi,
      imponibile,
      irpef,
      addizionali
    );
  }

  const advisor = useMemo(() => {
    if (nettoMensile === null) {
      return [];
    }

    return generateSalaryAdvice(
      Number(ral),
      nettoMensile
    );
  }, [ral, nettoMensile]);

  const hasResults =
    nettoMensile !== null &&
    nettoAnnuo !== null &&
    trattenute !== null &&
    contributi !== null &&
    imponibile !== null &&
    irpef !== null &&
    addizionali !== null;

  return (    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Calcolatore{" "}
          <span className="text-cyan-400">
            Stipendio Netto
          </span>
        </h1>

        <p className="mt-4 text-slate-400">
          Calcola una stima dello stipendio netto
          partendo dalla RAL.
        </p>

        <SalaryForm
          ral={ral}
          mensilita={mensilita}
          setRal={setRal}
          setMensilita={setMensilita}
          onCalculate={calcolaStipendio}
        />

        {hasResults && (
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

            <SalaryInsights
              ral={Number(ral)}
              nettoMensile={nettoMensile}
              nettoAnnuo={nettoAnnuo}
              trattenute={trattenute}
            />

            <SalaryAdvice
              ral={Number(ral)}
              nettoMensile={nettoMensile}
              mensilita={Number(mensilita)}
            />

            <AIAdvisor
              advice={advisor}
            />

            <SalaryChart
              netto={nettoAnnuo}
              trattenute={trattenute}
            />

            <div className="mt-8 flex justify-center">
              <SalaryPdfButton
                onClick={scaricaPDF}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <AIButton
                onClick={chiediAI}
                loading={aiLoading}
              />
            </div>

            {aiResponse && (
              <AIResponse
                response={aiResponse}
              />
            )}
          </>
        )}
      </section>
    </main>
  );
}