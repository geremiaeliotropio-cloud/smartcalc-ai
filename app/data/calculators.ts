import {
  Calculator,
  HeartPulse,
  Landmark,
  PiggyBank,
  Receipt,
  Scale,
  Wallet,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

export interface CalculatorItem {
  id: string;
  href: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
}

export const calculators: CalculatorItem[] = [
  {
    id: "mutuo",
    href: "/calculators/mutuo",
    title: "Calcolatore Mutuo",
    category: "Finanza",
    description: "Calcola rata, interessi e piano di ammortamento.",
    icon: Landmark,
  },
  {
    id: "prestito",
    href: "/calculators/prestito",
    title: "Calcolatore Prestito",
    category: "Prestiti",
    description: "Simula rate, interessi e costo totale.",
    icon: Wallet,
  },
  {
    id: "bmi",
    href: "/calculators/bmi",
    title: "Calcolatore BMI",
    category: "Salute",
    description: "Calcola il tuo indice di massa corporea.",
    icon: HeartPulse,
  },
  {
    id: "iva",
    href: "/calculators/iva",
    title: "Calcolatore IVA",
    category: "Fisco",
    description: "Aggiungi o rimuovi l'IVA in pochi secondi.",
    icon: Receipt,
  },
  {
    id: "stipendio",
    href: "/calculators/stipendio",
    title: "Calcolatore Stipendio",
    category: "Lavoro",
    description: "Calcola il netto partendo dalla RAL.",
    icon: Calculator,
  },
  {
    id: "confronto-stipendio",
    href: "/calculators/confronto-stipendio",
    title: "Confronto Stipendi",
    category: "Lavoro",
    description: "Confronta due RAL e scopri quanto cambia il tuo stipendio netto.",
    icon: Scale,
  },
  {
    id: "pensione",
    href: "/calculators/pensione",
    title: "Calcolatore Pensione",
    category: "Previdenza",
    description: "Stima la pensione futura.",
    icon: PiggyBank,
  },
];