"use client";

import { useState } from "react";

import AIButton from "../components/common/AIButton";
import AIResponse from "../components/common/AIResponse";

export default function AIPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
        }),
      });

      const data = await res.json();

      setResponse(data.message);
    } catch {
      alert("Errore durante la richiesta.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          🤖 SmartCalc AI
        </h1>

        <p className="mt-4 text-slate-400">
          Fai qualsiasi domanda su stipendi, mutui,
          prestiti, pensione e finanza personale.
        </p>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Es. Mi conviene accettare una RAL di 42.000 €?"
          className="mt-10 h-40 w-full rounded-2xl border border-slate-700 bg-slate-900 p-5 outline-none focus:border-cyan-400"
        />

        <div className="mt-6">
          <AIButton
            onClick={askAI}
            loading={loading}
          />
        </div>

        {response && (
          <AIResponse response={response} />
        )}
      </section>
    </main>
  );
}