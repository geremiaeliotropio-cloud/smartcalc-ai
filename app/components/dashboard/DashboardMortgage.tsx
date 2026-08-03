"use client";

import DashboardCard from "./DashboardCard";

import {
  getMortgageCalculation,
} from "../../lib/storage";

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function DashboardMortgage() {
  const mortgage = getMortgageCalculation();

  if (!mortgage) {
    return (
      <DashboardCard
        icon="🏠"
        title="Mutuo"
        value="Nessun dato"
        subtitle="Calcola il tuo mutuo"
        color="emerald"
        href="/calculators/mutuo"
      />
    );
  }

  return (
    <DashboardCard
      icon="🏠"
      title="Mutuo"
      value={formatEuro(mortgage.rata)}
      subtitle={`Importo ${formatEuro(mortgage.importo)}`}
      color="emerald"
      href="/calculators/mutuo"
    />
  );
}