import {
  Calculator,
  Landmark,
  PiggyBank,
  Receipt,
  Scale,
  Wallet,
  Percent,
  Briefcase,
  Gift,
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
    description:
      "Calcola rata, interessi e piano di ammortamento.",
    icon: Landmark,
  },

  {
    id: "prestito",
    href: "/calculators/prestito",
    title: "Calcolatore Prestito",
    category: "Prestiti",
    description:
      "Simula rate, interessi e costo totale.",
    icon: Wallet,
  },

  {
    id: "iva",
    href: "/calculators/iva",
    title: "Calcolatore IVA",
    category: "Fisco",
    description:
      "Aggiungi o rimuovi l'IVA in pochi secondi.",
    icon: Receipt,
  },

  {
    id: "irpef",
    href: "/calculators/irpef",
    title: "Calcolatore IRPEF",
    category: "Fisco",
    description:
      "Calcola una stima dell'IRPEF e del reddito netto annuo.",
    icon: Percent,
  },

  {
    id: "stipendio",
    href: "/calculators/stipendio",
    title: "Calcolatore Stipendio",
    category: "Lavoro",
    description:
      "Calcola il netto partendo dalla RAL.",
    icon: Calculator,
  },

  {
    id: "confronto-stipendio",
    href: "/calculators/confronto-stipendio",
    title: "Confronto Stipendi",
    category: "Lavoro",
    description:
      "Confronta due RAL e scopri quanto cambia il tuo stipendio netto.",
    icon: Scale,
  },

  {
    id: "tfr",
    href: "/calculators/tfr",
    title: "Calcolatore TFR",
    category: "Lavoro",
    description:
      "Calcola il Trattamento di Fine Rapporto maturato.",
    icon: Briefcase,
  },

  {
    id: "tredicesima",
    href: "/calculators/tredicesima",
    title: "Calcolatore Tredicesima",
    category: "Lavoro",
    description:
      "Calcola una stima della tredicesima mensilità.",
    icon: Gift,
  },

  {
    id: "interessi-composti",
    href: "/calculators/interessi-composti",
    title: "Interessi Composti",
    category: "Investimenti",
    description:
      "Simula la crescita del capitale con interessi composti.",
    icon: PiggyBank,
  },

  {
    id: "pensione",
    href: "/calculators/pensione",
    title: "Calcolatore Pensione",
    category: "Pensione",
    description:
      "Simula una stima della pensione mensile futura.",
    icon: Landmark,
  },
];