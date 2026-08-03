"use client";

import { useMemo, useState } from "react";

import CalculatorGrid from "../components/CalculatorGrid";
import { calculators } from "../data/calculators";

export default function CalculatorsPage() {
  const [search, setSearch] = useState("");

  const filteredCalculators = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return calculators;
    }

    return calculators.filter(
      (calculator) =>
        calculator.title.toLowerCase().includes(query) ||
        calculator.description.toLowerCase().includes(query) ||
        calculator.category.toLowerCase().includes(query)
    );
  }, [search]);

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
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none transition focus:border-cyan-400"
          />
        </div>

        <div className="mt-12">
          {filteredCalculators.length > 0 ? (
            <CalculatorGrid calculators={filteredCalculators} />
          ) : (
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">
              <h2 className="text-2xl font-bold">
                Nessun calcolatore trovato
              </h2>

              <p className="mt-3 text-slate-400">
                Prova a cercare con un termine diverso.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}