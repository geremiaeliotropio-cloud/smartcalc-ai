import { PiggyBank } from "lucide-react";

import type { Calculator } from "./types";

const compound: Calculator = {
  id: "compound",

  title: "Interessi Composti",

  shortTitle: "Investimenti",

  description:
    "Simula la crescita del capitale con gli interessi composti.",

  category: "Investimenti",

  href: "/calculators/interessi-composti",

  icon: PiggyBank,

  featured: true,

  popular: true,

  aiEnabled: true,

  difficulty: "Medium",

  estimatedTime: 3,

  keywords: [
    "investimenti",
    "interessi composti",
    "capitale",
    "rendimenti",
    "borsa",
    "etf",
    "azioni",
  ],

  related: [
    "salary",
    "loan",
  ],

  seo: {
    title: "Interessi Composti | SmartCalc AI",

    description:
      "Calcola la crescita del capitale nel tempo grazie agli interessi composti.",

    keywords: [
      "interessi composti",
      "investimenti",
      "rendimenti",
    ],
  },
};

export default compound;