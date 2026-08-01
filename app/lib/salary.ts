import { calculateTaxes } from "./tax";

export interface SalaryResult {
  nettoAnnuo: number;
  nettoMensile: number;
  trattenute: number;

  contributi: number;
  imponibile: number;
  irpef: number;
  addizionali: number;
}

export function calculateSalary(
  ral: number,
  mensilita: number
): SalaryResult {
  const tasse = calculateTaxes(ral);

  const nettoAnnuo =
    ral - tasse.trattenute;

  return {
    nettoAnnuo,
    nettoMensile: nettoAnnuo / mensilita,
    trattenute: tasse.trattenute,

    contributi: tasse.contributi,
    imponibile: tasse.imponibile,
    irpef: tasse.irpef,
    addizionali: tasse.addizionali,
  };
}