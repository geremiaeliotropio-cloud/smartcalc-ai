"use client";

import DashboardCard from "./DashboardCard";

import {
  getLoanCalculation,
} from "../../lib/storage";

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function DashboardLoan() {
  const loan = getLoanCalculation();

  if (!loan) {
    return (
      <DashboardCard
        icon="💳"
        title="Prestito"
        value="Nessun dato"
        subtitle="Calcola il tuo prestito"
        color="amber"
        href="/calculators/prestito"
      />
    );
  }

  return (
    <DashboardCard
      icon="💳"
      title="Prestito"
      value={formatEuro(loan.rata)}
      subtitle={`Importo ${formatEuro(loan.importo)}`}
      color="amber"
      href="/calculators/prestito"
    />
  );
}