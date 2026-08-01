"use client";

import { useState } from "react";

import SalaryForm from "../../components/stipendio/SalaryForm";
import SalarySummary from "../../components/stipendio/SalarySummary";
import SalaryResults from "../../components/stipendio/SalaryResults";
import SalaryChart from "../../components/stipendio/SalaryChart";

export default function SalaryPage() {
  const [ral, setRal] = useState("");
  const [mensilita, setMensilita] = useState("13");

  const [nettoMensile, setNettoMensile] = useState<number | null>(null);
  const [nettoAnnuo, setNettoAnnuo] = useState<number | null>(null);
  const [trattenute, setTrattenute] = useState<number | null>(null);

  function calcolaStipendio() {
    const RAL = Number(ral);

    if (RAL <= 0) {
      alert("Inserisci una RAL valida.");
      return;
    }

    // Calcolo provvisorio
    const netto = RAL * 0.7;
    const mensile = netto / Number(mensilita);
    const tasse = RAL - netto;

    setNettoAnnuo(netto);
    setNettoMensile(mensile);
    setTrattenute(tasse);
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
          trattenute !== null && (
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

              <SalaryChart
                netto={nettoAnnuo}
                trattenute={trattenute}
              />
            </>
          )}
      </section>
    </main>
  );
}
