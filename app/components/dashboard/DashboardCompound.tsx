"use client";

import { useEffect, useState } from "react";

import DashboardCard from "./DashboardCard";

import {
  getCompoundCalculation,
  type SavedCompoundCalculation,
} from "../../lib/storage";

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function DashboardCompound() {
  const [compound, setCompound] =
    useState<SavedCompoundCalculation | null>(null);

  useEffect(() => {
    const loadCompound = () => {
      const data = getCompoundCalculation();

      setTimeout(() => {
        setCompound(data);
      }, 0);
    };

    loadCompound();
  }, []);

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
      subtitle={`Investito ${formatEuro(compound.investito)}`}
      color="violet"
      href="/calculators/interessi-composti"
    />
  );
}