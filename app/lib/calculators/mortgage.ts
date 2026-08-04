import { Landmark } from "lucide-react";

import type { Calculator } from "./types";

const mortgage: Calculator = {
  id: "mortgage",

  title: "Calcolo Mutuo",

  shortTitle: "Mutuo",

  description:
    "Calcola rata, interessi e costo complessivo del mutuo.",

  category: "Casa",

  href: "/calculators/mutuo",

  icon: Landmark,

  featured: true,

  popular: true,

  aiEnabled: true,

  difficulty: "Medium",

  estimatedTime: 3,

  keywords: [
    "mutuo",
    "casa",
    "rata",
    "interessi",
    "ammortamento",
    "banca",
    "finanziamento",
  ],

  related: [
    "salary",
    "loan",
  ],

  seo: {
    title: "Calcolo Mutuo | SmartCalc AI",

    description:
      "Calcola online rata, interessi e piano di ammortamento del tuo mutuo.",

    keywords: [
      "mutuo",
      "calcolo mutuo",
      "rata mutuo",
      "ammortamento",
    ],
  },
};

export default mortgage;