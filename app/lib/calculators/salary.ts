import { Calculator } from "lucide-react";

import type { Calculator as CalculatorType } from "./types";

const salary: CalculatorType = {
  id: "salary",

  title: "Calcolo Stipendio Netto",

  shortTitle: "Stipendio",

  description:
    "Calcola il tuo stipendio netto partendo dalla RAL.",

  category: "Lavoro",

  href: "/calculators/stipendio",

  icon: Calculator,

  featured: true,

  popular: true,

  aiEnabled: true,

  difficulty: "Easy",

  estimatedTime: 2,

  keywords: [
    "stipendio",
    "ral",
    "netto",
    "lordo",
    "busta paga",
    "reddito",
    "irpef",
    "contributi",
  ],

  related: [
    "salaryComparison",
    "mortgage",
    "loan",
  ],

  seo: {
    title: "Calcolo Stipendio Netto | SmartCalc AI",

    description:
      "Calcola il tuo stipendio netto online partendo dalla RAL.",

    keywords: [
      "stipendio",
      "ral",
      "netto",
      "busta paga",
    ],
  },
};

export default salary;