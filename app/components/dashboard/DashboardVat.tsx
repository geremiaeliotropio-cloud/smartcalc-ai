"use client";

import { useEffect, useState } from "react";

import DashboardCard from "./DashboardCard";

import {
  getVatCalculation,
  type SavedVatCalculation,
} from "../../lib/storage";

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function DashboardVat() {
  const [vat, setVat] =
    useState<SavedVatCalculation | null>(null);

  useEffect(() => {
    const loadVat = () => {
      const data = getVatCalculation();

      setTimeout(() => {
        setVat(data);
      }, 0);
    };

    loadVat();
  }, []);

  if (!vat) {
    return (
      <DashboardCard
        icon="🧾"
        title="IVA"
        value="Nessun dato"
        subtitle="Calcola l'IVA"
        color="rose"
        href="/calculators/iva"
      />
    );
  }

  return (
    <DashboardCard
      icon="🧾"
      title="IVA"
      value={formatEuro(vat.totale)}
      subtitle={`IVA ${formatEuro(vat.iva)}`}
      color="rose"
      href="/calculators/iva"
    />
  );
}