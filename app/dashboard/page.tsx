"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">

        <h1 className="text-5xl font-bold">
          📊 Dashboard SmartCalc
        </h1>

        <p className="mt-4 text-slate-400">
          Qui troverai tutte le tue analisi e i consigli
          personalizzati di SmartCalc AI.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Ultima RAL
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              --
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Netto mensile
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              --
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              SmartCalc Score
            </p>

            <h2 className="mt-3 text-4xl font-bold text-cyan-400">
              --
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Obiettivo
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              --
            </h2>
          </div>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          <Link
            href="/advisor"
            className="rounded-3xl border border-cyan-500 bg-slate-900 p-8 transition hover:bg-slate-800"
          >
            <h2 className="text-2xl font-bold">
              🤖 Apri SmartCalc Advisor
            </h2>

            <p className="mt-4 text-slate-400">
              Ricevi consigli personalizzati basati sulla tua situazione.
            </p>
          </Link>

          <Link
            href="/ai"
            className="rounded-3xl border border-cyan-500 bg-slate-900 p-8 transition hover:bg-slate-800"
          >
            <h2 className="text-2xl font-bold">
              💬 Chat AI
            </h2>

            <p className="mt-4 text-slate-400">
              Fai domande su stipendi, mutui, pensioni e finanza personale.
            </p>
          </Link>

        </div>

      </section>
    </main>
  );
}