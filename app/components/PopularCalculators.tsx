import {
  Calculator,
  HeartPulse,
  Landmark,
  PiggyBank,
  Receipt,
  Wallet,
} from "lucide-react";

import Link from "next/link";

import CalculatorCard from "./CalculatorCard";
import PrimaryButton from "./common/PrimaryButton";

const calculators = [
  {
    slug: "mutuo",
    title: "Calcolatore Mutuo",
    description: "Calcola rata, interessi e piano di ammortamento.",
    category: "Finanza",
    icon: Landmark,
  },
  {
    slug: "bmi",
    title: "Calcolatore BMI",
    description: "Calcola il tuo indice di massa corporea.",
    category: "Salute",
    icon: HeartPulse,
  },
  {
    slug: "iva",
    title: "Calcolatore IVA",
    description: "Aggiungi o rimuovi l'IVA in pochi secondi.",
    category: "Fisco",
    icon: Receipt,
  },
  {
    slug: "pensione",
    title: "Calcolatore Pensione",
    description: "Stima il tuo futuro pensionistico.",
    category: "Previdenza",
    icon: PiggyBank,
  },
  {
    slug: "prestito",
    title: "Calcolatore Prestito",
    description: "Simula rate, interessi e costo totale.",
    category: "Prestiti",
    icon: Wallet,
  },
  {
    slug: "stipendio",
    title: "Calcolatore Stipendio",
    description: "Calcola il netto partendo dalla RAL.",
    category: "Lavoro",
    icon: Calculator,
  },
];

export default function PopularCalculators() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="font-semibold text-cyan-400">
            Più utilizzati
          </p>

          <h2 className="text-4xl font-bold">
            Calcolatori Popolari
          </h2>
        </div>

        <Link href="/calculators">
          <PrimaryButton>
            Vedi tutti
          </PrimaryButton>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calculator) => (
          <CalculatorCard
            key={calculator.slug}
            slug={calculator.slug}
            title={calculator.title}
            description={calculator.description}
            category={calculator.category}
            icon={calculator.icon}
          />
        ))}
      </div>
    </section>
  );
}