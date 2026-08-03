"use client";

import Link from "next/link";

export default function QuickLinks() {
  return (
    <div className="mt-16">
      <h2 className="mb-6 text-3xl font-bold">
        🚀 Accesso rapido
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        <Link
          href="/advisor"
          className="rounded-3xl border border-cyan-500 bg-slate-900 p-8 transition hover:bg-slate-800"
        >
          <h3 className="text-2xl font-bold">
            🤖 SmartCalc Advisor
          </h3>

          <p className="mt-4 text-slate-400">
            Ricevi consigli personalizzati sulla
            tua situazione finanziaria.
          </p>
        </Link>

        <Link
          href="/ai"
          className="rounded-3xl border border-cyan-500 bg-slate-900 p-8 transition hover:bg-slate-800"
        >
          <h3 className="text-2xl font-bold">
            💬 Chat AI
          </h3>

          <p className="mt-4 text-slate-400">
            Fai domande su mutui, stipendi,
            investimenti e finanza personale.
          </p>
        </Link>
      </div>
    </div>
  );
}