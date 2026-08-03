"use client";

import DashboardCard from "./DashboardCard";

import {
  getVatCalculation,
} from "../../lib/storage";

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function DashboardVat() {
  const vat = getVatCalculation();

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