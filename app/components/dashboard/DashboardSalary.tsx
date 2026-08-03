"use client";

import DashboardCard from "./DashboardCard";

import {
  getSalaryCalculation,
} from "../../lib/storage";

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function DashboardSalary() {
  const salary = getSalaryCalculation();

  if (!salary) {
    return (
      <DashboardCard
        icon="💼"
        title="Stipendio"
        value="Nessun dato"
        subtitle="Calcola il tuo stipendio"
        color="cyan"
        href="/calculators/stipendio"
      />
    );
  }

  return (
    <DashboardCard
      icon="💼"
      title="Stipendio"
      value={formatEuro(salary.nettoMensile)}
      subtitle={`RAL ${formatEuro(salary.ral)}`}
      color="cyan"
      href="/calculators/stipendio"
    />
  );
}