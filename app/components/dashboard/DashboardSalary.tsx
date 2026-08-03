"use client";

import { useEffect, useState } from "react";

import DashboardCard from "./DashboardCard";

import {
  getSalaryCalculation,
  type SavedSalaryCalculation,
} from "../../lib/storage";

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function DashboardSalary() {
  const [salary, setSalary] =
    useState<SavedSalaryCalculation | null>(null);

  useEffect(() => {
    const loadSalary = () => {
      const data = getSalaryCalculation();

      setTimeout(() => {
        setSalary(data);
      }, 0);
    };

    loadSalary();
  }, []);

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