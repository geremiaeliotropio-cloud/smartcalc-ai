"use client";

import DashboardSalary from "../components/dashboard/DashboardSalary";
import DashboardMortgage from "../components/dashboard/DashboardMortgage";
import DashboardLoan from "../components/dashboard/DashboardLoan";
import DashboardCompound from "../components/dashboard/DashboardCompound";
import DashboardVat from "../components/dashboard/DashboardVat";

import QuickLinks from "../components/dashboard/QuickLinks";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-bold">
          📊 Dashboard SmartCalc
        </h1>

        <p className="mt-4 text-slate-400">
          Consulta rapidamente le ultime simulazioni
          salvate e accedi agli strumenti di SmartCalc AI.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <DashboardSalary />

          <DashboardMortgage />

          <DashboardLoan />

          <DashboardCompound />

          <DashboardVat />
        </div>

        <QuickLinks />
      </section>
    </main>
  );
}