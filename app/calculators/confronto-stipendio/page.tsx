"use client";

import { useState } from "react";

import Input from "../../components/common/Input";
import PrimaryButton from "../../components/common/PrimaryButton";
import SalaryComparison from "../../components/stipendio/SalaryComparison";

import { compareSalaries } from "../../lib/salaryComparison";

export default function SalaryComparisonPage() {
  const [ralAttuale, setRalAttuale] = useState("");
  const [ralNuova, setRalNuova] = useState("");
  const [mensilita, setMensilita] = useState("13");

  const [result, setResult] =
    useState<ReturnType<typeof compareSalaries> | null>(
      null
    );

  function confronta() {
    const attuale = Number(ralAttuale);
    const nuova = Number(ralNuova);

    if (attuale <= 0 || nuova <= 0) {
      alert("Inserisci due RAL valide.");
      return;
    }

    setResult(
      compareSalaries(
        attuale,
        nuova,
        Number(mensilita)
      )
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          Confronto{" "}
          <span className="text-cyan-400">
            Stipendi
          </span>
        </h1>

        <p className="mt-4 text-slate-400">
          Confronta due offerte di lavoro e scopri quanto cambia il tuo stipendio netto.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <div className="space-y-6">

            <Input
              label="RAL attuale (€)"
              type="number"
              value={ralAttuale}
              onChange={setRalAttuale}
              placeholder="Es. 30000"
            />

            <Input
              label="RAL nuova (€)"
              type="number"
              value={ralNuova}
              onChange={setRalNuova}
              placeholder="Es. 35000"
            />

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Mensilità
              </label>

              <select
                value={mensilita}
                onChange={(e) => setMensilita(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
              >
                <option value="13">13 Mensilità</option>
                <option value="14">14 Mensilità</option>
              </select>
            </div>

            <PrimaryButton
              onClick={confronta}
              className="w-full"
            >
              Confronta
            </PrimaryButton>

          </div>

        </div>

        {result && (
          <SalaryComparison
            ralAttuale={Number(ralAttuale)}
            ralNuova={Number(ralNuova)}
            nettoAttuale={result.attuale.nettoMensile}
            nettoNuovo={result.nuova.nettoMensile}
            differenzaMensile={result.differenzaMensile}
            differenzaAnnua={result.differenzaAnnua}
          />
        )}

      </section>
    </main>
  );
}