"use client";

import DashboardCard from "./DashboardCard";

import {
  getCompoundCalculation,
} from "../../lib/storage";

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function DashboardCompound() {
  const compound = getCompoundCalculation();

  if (!compound) {
    return (
      <DashboardCard
        icon="📈"
        title="Investimento"
        value="Nessun dato"
        subtitle="Calcola gli interessi composti"
        color="violet"
        href="/calculators/interessi-composti"
      />
    );
  }

  return (
    <DashboardCard
      icon="📈"
      title="Investimento"
      value={formatEuro(compound.totale)}
      subtitle={`Investito ${formatEuro(
        compound.investito
      )}`}
      color="violet"
      href="/calculators/interessi-composti"
    />
  );
}