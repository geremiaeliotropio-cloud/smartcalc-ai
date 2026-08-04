import { Scale } from "lucide-react";

import type { Calculator } from "./types";

const salaryComparison: Calculator = {
  id: "salaryComparison",

  title: "Confronto Stipendi",

  shortTitle: "Confronto",

  description:
    "Confronta due RAL e scopri quale conviene.",

  category: "Lavoro",

  href: "/calculators/confronto-stipendio",

  icon: Scale,

  featured: true,

  popular: false,

  aiEnabled: true,

  difficulty: "Easy",

  estimatedTime: 2,

  keywords: [
    "stipendio",
    "confronto",
    "ral",
    "netto",
  ],

  related: [
    "salary",
    "mortgage",
  ],

  seo: {
    title: "Confronto Stipendi | SmartCalc AI",

    description:
      "Confronta due stipendi e scopri quale conviene.",

    keywords: [
      "confronto stipendio",
      "ral",
      "stipendio netto",
    ],
  },
};

export default salaryComparison;