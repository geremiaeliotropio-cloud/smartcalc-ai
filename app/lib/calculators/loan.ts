import { Wallet } from "lucide-react";

import type { Calculator } from "./types";

const loan: Calculator = {
  id: "loan",

  title: "Calcolo Prestito",

  shortTitle: "Prestito",

  description:
    "Simula rata, interessi e costo totale del prestito.",

  category: "Finanza",

  href: "/calculators/prestito",

  icon: Wallet,

  featured: true,

  popular: true,

  aiEnabled: true,

  difficulty: "Easy",

  estimatedTime: 2,

  keywords: [
    "prestito",
    "finanziamento",
    "rata",
    "credito",
    "banca",
    "interessi",
  ],

  related: [
    "mortgage",
    "salary",
  ],

  seo: {
    title: "Calcolo Prestito | SmartCalc AI",

    description:
      "Calcola rata, interessi e costo totale del prestito.",

    keywords: [
      "prestito",
      "rata",
      "finanziamento",
      "credito",
    ],
  },
};

export default loan;