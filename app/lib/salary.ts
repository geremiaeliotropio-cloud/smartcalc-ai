import { calculateTaxes } from "./tax";
import type { SalaryCalculation } from "../types/salary";

export function calculateSalary(
  ral: number,
  mensilita: number
): SalaryCalculation {
  const tasse = calculateTaxes(ral);

  const nettoAnnuo = ral - tasse.trattenute;

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