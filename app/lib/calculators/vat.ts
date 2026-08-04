import { Receipt } from "lucide-react";

import type { Calculator } from "./types";

const vat: Calculator = {
  id: "vat",

  title: "Calcolo IVA",

  shortTitle: "IVA",

  description:
    "Calcola IVA inclusa, esclusa e scorporo.",

  category: "Tasse",

  href: "/calculators/iva",

  icon: Receipt,

  featured: true,

  popular: true,

  aiEnabled: true,

  difficulty: "Easy",

  estimatedTime: 1,

  keywords: [
    "iva",
    "imposta",
    "fattura",
    "aliquota",
    "scorporo",
  ],

  related: [
    "salary",
  ],

  seo: {
    title: "Calcolo IVA | SmartCalc AI",

    description:
      "Calcola IVA online in modo semplice e veloce.",

    keywords: [
      "iva",
      "calcolo iva",
      "scorporo iva",
    ],
  },
};

export default vat;