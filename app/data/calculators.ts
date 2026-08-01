export interface CalculatorItem {
  id: string;
  title: string;
  category: string;
  description: string;
}

export const calculators: CalculatorItem[] = [
  {
    id: "mutuo",
    title: "Calcolatore Mutuo",
    category: "Finanza",
    description: "Calcola rata, interessi e piano di ammortamento."
  },
  {
    id: "prestito",
    title: "Calcolatore Prestito",
    category: "Finanza",
    description: "Simula un prestito personale."
  },
  {
    id: "bmi",
    title: "Calcolatore BMI",
    category: "Salute",
    description: "Calcola l'indice di massa corporea."
  },
  {
    id: "iva",
    title: "Calcolatore IVA",
    category: "Fisco",
    description: "Aggiungi o scorpora l'IVA."
  },
  {
    id: "stipendio",
    title: "Calcolatore Stipendio",
    category: "Lavoro",
    description: "Calcola netto e lordo."
  },
  {
    id: "pensione",
    title: "Calcolatore Pensione",
    category: "Previdenza",
    description: "Stima la pensione futura."
  }
];