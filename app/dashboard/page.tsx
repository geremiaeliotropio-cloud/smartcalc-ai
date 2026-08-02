"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  getSalaryCalculation,
  type SavedSalaryCalculation,
} from "../lib/storage";

export default function DashboardPage() {
  const [salary, setSalary] =
    useState<SavedSalaryCalculation | null>(null);

  useEffect(() => {
    setSalary(getSalaryCalculation());
  }, []);

  const formatEuro = (value: number) =>
    new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(value);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-bold">
          📊 Dashboard SmartCalc
        </h1>

        <p className="mt-4 text-slate-400">
          Qui trovi l'ultima simulazione salvata e
          i collegamenti rapidi ai servizi di
          SmartCalc AI.
        </p>

        {salary ? (
          <>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-slate-400">
                  Ultima RAL
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {formatEuro(salary.ral)}
                </h2>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-slate-400">
                  Netto mensile
                </p>

                <h2 className="mt-3 text-3xl font-bold text-cyan-400">
                  {formatEuro(
                    salary.nettoMensile
                  )}
                </h2>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-slate-400">
                  Mensilità
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {salary.mensilita}
                </h2>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-slate-400">
                  Ultima simulazione
                </p>

                <h2 className="mt-3 text-xl font-bold">
                  {formatDate(
                    salary.createdAt
                  )}
                </h2>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-cyan-500 bg-slate-900 p-8">
              <h2 className="text-2xl font-bold">
                Ultima analisi
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-slate-400">
                    Netto annuo
                  </p>

                  <p className="text-2xl font-bold">
                    {formatEuro(
                      salary.nettoAnnuo
                    )}
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">
                    Trattenute
                  </p>

                  <p className="text-2xl font-bold">
                    {formatEuro(
                      salary.trattenute
                    )}
                  </p>
                </div>
              </div>

              <Link
                href="/calculators/stipendio"
                className="mt-8 inline-flex rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Apri il calcolatore
              </Link>
            </div>
          </>
        ) : (
          <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">
            <h2 className="text-3xl font-bold">
              Nessuna simulazione trovata
            </h2>

            <p className="mt-4 text-slate-400">
              Calcola il tuo stipendio per
              iniziare a popolare la Dashboard.
            </p>

            <Link
              href="/calculators/stipendio"
              className="mt-8 inline-flex rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Vai al calcolatore
            </Link>
          </div>
        )}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Link
            href="/advisor"
            className="rounded-3xl border border-cyan-500 bg-slate-900 p-8 transition hover:bg-slate-800"
          >
            <h2 className="text-2xl font-bold">
              🤖 SmartCalc Advisor
            </h2>

            <p className="mt-4 text-slate-400">
              Ricevi consigli personalizzati
              sulla tua situazione finanziaria.
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
              Fai domande su stipendi, mutui,
              pensioni, IVA e finanza personale.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}