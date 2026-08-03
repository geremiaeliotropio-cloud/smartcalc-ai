"use client";

import { useEffect, useState } from "react";

import DashboardCard from "./DashboardCard";

import {
  getLoanCalculation,
  type SavedLoanCalculation,
} from "../../lib/storage";

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function DashboardLoan() {
  const [loan, setLoan] =
    useState<SavedLoanCalculation | null>(null);

  useEffect(() => {
    const loadLoan = () => {
      const data = getLoanCalculation();

      setTimeout(() => {
        setLoan(data);
      }, 0);
    };

    loadLoan();
  }, []);

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