"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { calculators } from "../lib/calculators";

export default function SearchCalculator() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return [];
    }

    return calculators.filter((calculator) => {
      return (
        calculator.title
          .toLowerCase()
          .includes(value) ||
        calculator.description
          .toLowerCase()
          .includes(value) ||
        calculator.category
          .toLowerCase()
          .includes(value)
      );
    });
  }, [query]);

  return (
    <div className="relative w-full max-w-3xl">
      <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900/80 px-4 backdrop-blur transition focus-within:border-cyan-400">
        <Search
          size={20}
          className="text-slate-500"
        />

        <input
          type="text"
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          placeholder="Cerca un calcolatore..."
          className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-slate-500"
        />
      </div>

      {results.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          {results.map((calculator) => (
            <Link
              key={calculator.id}
              href={calculator.href}
              onClick={() => setQuery("")}
              className="flex items-start gap-4 border-b border-slate-800 px-5 py-4 transition hover:bg-slate-800 last:border-none"
            >
              <div className="text-2xl">
                {calculator.icon}
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {calculator.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {calculator.description}
                </p>

                <span className="mt-2 inline-block rounded-full bg-cyan-500/10 px-2 py-1 text-xs text-cyan-400">
                  {calculator.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}