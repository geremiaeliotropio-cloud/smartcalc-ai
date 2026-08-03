"use client";

import { useState } from "react";

import Card from "../components/common/Card";
import Input from "../components/common/Input";
import PrimaryButton from "../components/common/PrimaryButton";

import AdvisorSummary from "../components/advisor/AdvisorSummary";
import AdvisorStrengths from "../components/advisor/AdvisorStrengths";
import AdvisorRisks from "../components/advisor/AdvisorRisks";
import AdvisorRecommendations from "../components/advisor/AdvisorRecommendations";
import AdvisorNextCalculators from "../components/advisor/AdvisorNextCalculators";

interface AdvisorResponse {
  summary: string;
  strengths: string[];
  risks: string[];
  recommendations: string[];
  calculators: string[];
}

export default function AdvisorPage() {
  const [ral, setRal] = useState("35000");
  const [eta, setEta] = useState("30");
  const [risparmi, setRisparmi] =
    useState("10000");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<AdvisorResponse | null>(
      null
    );

  async function analyze() {
    setLoading(true);

    setResult(null);

    try {
      const response = await fetch(
        "/api/ai/advisor",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ral: Number(ral),
            eta: Number(eta),
            risparmi: Number(
              risparmi
            ),
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message
        );
      }

      setResult(data);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Errore durante l'analisi."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          🤖 SmartCalc Advisor
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Ricevi una valutazione della tua
          situazione finanziaria con consigli
          personalizzati.
        </p>

        <Card className="mt-10 p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Input
              label="RAL (€)"
              type="number"
              value={ral}
              onChange={setRal}
            />

            <Input
              label="Età"
              type="number"
              value={eta}
              onChange={setEta}
            />

            <Input
              label="Risparmi (€)"
              type="number"
              value={risparmi}
              onChange={setRisparmi}
            />
          </div>

          <PrimaryButton
            className="mt-8"
            onClick={analyze}
            disabled={loading}
          >
            {loading
              ? "Analisi in corso..."
              : "Analizza la situazione"}
          </PrimaryButton>
        </Card>

        {result && (
          <div className="mt-10 space-y-8">
            <AdvisorSummary
              summary={result.summary}
            />

            <AdvisorStrengths
              strengths={
                result.strengths
              }
            />

            <AdvisorRisks
              risks={result.risks}
            />

            <AdvisorRecommendations
              recommendations={
                result.recommendations
              }
            />

            <AdvisorNextCalculators
              calculators={
                result.calculators
              }
            />
          </div>
        )}
      </section>
    </main>
  );
}