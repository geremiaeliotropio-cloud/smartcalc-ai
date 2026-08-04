"use client";

import { useState } from "react";

interface Props {
  calculator: string;
  data: Record<string, unknown>;
}

export default function AnalyzeWithAIButton({
  calculator,
  data,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  async function analyze() {
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          calculator,
          data,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message);
      }

      setResponse(json.message);
    } catch (error) {
      setResponse(
        error instanceof Error
          ? error.message
          : "Errore durante l'analisi."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={analyze}
        disabled={loading}
        className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500 disabled:opacity-50"
      >
        {loading
          ? "Analisi in corso..."
          : "🤖 Analizza con AI"}
      </button>

      {response && (
        <div className="mt-8 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-6">
          <h2 className="mb-4 text-2xl font-bold text-violet-300">
            🤖 Analisi SmartCalc AI
          </h2>

          <p className="whitespace-pre-wrap text-slate-200">
            {response}
          </p>
        </div>
      )}
    </>
  );
}