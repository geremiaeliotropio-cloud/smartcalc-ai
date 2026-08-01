"use client";

import Link from "next/link";
import { useState } from "react";

const calculators = [
  {
    title: "🏦 Mutuo",
    description: "Calcola rata, interessi e piano di ammortamento.",
    href: "/calculators/mutuo",
    category: "Finanza",
  },
  {
    title: "💳 Prestito",
    description: "Calcola la rata del prestito.",
    href: "/calculators/prestito",
    category: "Finanza",
  },
  {
    title: "🧾 IVA",
    description: "Calcola IVA e totale.",
    href: "/calculators/iva",
    category: "Fisco",
  },
  {
    title: "💼 Stipendio Netto",
    description: "Stima il netto partendo dalla RAL.",
    href: "/calculators/stipendio",
    category: "Lavoro",
  },
];

export default function CalculatorsPage() {
  const [search, setSearch] = useState("");

  const filteredCalculators = calculators.filter(
    (calc) =>
      calc.title.toLowerCase().includes(search.toLowerCase()) ||
      calc.description.toLowerCase().includes(search.toLowerCase()) ||
      calc.category.toLowerCase().includes(search.toLowerCase())
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

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCalculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <h2 className="text-2xl font-bold">
                {calc.title}
              </h2>

              <span className="mt-3 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                {calc.category}
              </span>

              <p className="mt-3 text-slate-400">
                {calc.description}
              </p>

              <span className="mt-6 inline-block font-semibold text-cyan-400">
                Apri →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}