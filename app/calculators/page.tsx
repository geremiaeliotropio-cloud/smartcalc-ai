"use client";

import { useState } from "react";

import { calculators } from "../data/calculators";
import CalculatorGrid from "../components/CalculatorGrid";

export default function CalculatorsPage() {
  const [search, setSearch] = useState("");

  const filteredCalculators = calculators.filter(
    (calculator) =>
      calculator.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      calculator.description
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      calculator.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Tutti i{" "}
          <span className="text-cyan-400">
            Calcolatori
          </span>
        </h1>

        <p className="mt-4 text-slate-400">
          Scegli il calcolatore di cui hai bisogno.
        </p>

        <div className="mt-10">
          <input
            type="text"
            placeholder="🔍 Cerca un calcolatore..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
          />
        </div>

        <div className="mt-12">
          <CalculatorGrid calculators={filteredCalculators} />
        </div>
      </section>
    </main>
  );
}