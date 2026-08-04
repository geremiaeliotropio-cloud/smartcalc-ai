export interface Calculator {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  icon: string;
}

export const calculators: Calculator[] = [
  {
    id: "stipendio",
    title: "Calcolo Stipendio Netto",
    description:
      "Calcola il tuo stipendio netto partendo dalla RAL.",
    category: "Lavoro",
    href: "/calculators/stipendio",
    icon: "💼",
  },

  {
    id: "confronto-stipendio",
    title: "Confronto Stipendi",
    description:
      "Confronta due RAL e scopri quale conviene.",
    category: "Lavoro",
    href: "/calculators/confronto-stipendio",
    icon: "⚖️",
  },

  {
    id: "mutuo",
    title: "Calcolo Mutuo",
    description:
      "Calcola rata, interessi e costo totale del mutuo.",
    category: "Casa",
    href: "/calculators/mutuo",
    icon: "🏠",
  },

  {
    id: "prestito",
    title: "Calcolo Prestito",
    description:
      "Simula rata e costo complessivo di un prestito.",
    category: "Finanza",
    href: "/calculators/prestito",
    icon: "💳",
  },

  {
    id: "interessi-composti",
    title: "Interessi Composti",
    description:
      "Simula la crescita dei tuoi investimenti nel tempo.",
    category: "Investimenti",
    href: "/calculators/interessi-composti",
    icon: "📈",
  },

  {
    id: "iva",
    title: "Calcolo IVA",
    description:
      "Calcola IVA inclusa, esclusa e scorporo.",
    category: "Tasse",
    href: "/calculators/iva",
    icon: "🧾",
  },
];