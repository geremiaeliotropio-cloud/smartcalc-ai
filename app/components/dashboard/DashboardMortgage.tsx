"use client";

import { useEffect, useState } from "react";

import DashboardCard from "./DashboardCard";

import {
  getMortgageCalculation,
  type SavedMortgageCalculation,
} from "../../lib/storage";

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function DashboardMortgage() {
  const [mortgage, setMortgage] =
    useState<SavedMortgageCalculation | null>(null);

  useEffect(() => {
    const loadMortgage = () => {
      const data = getMortgageCalculation();

      setTimeout(() => {
        setMortgage(data);
      }, 0);
    };

    loadMortgage();
  }, []);

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