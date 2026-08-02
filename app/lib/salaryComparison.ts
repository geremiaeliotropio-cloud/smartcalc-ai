import { calculateSalary } from "./salary";
import type { SalaryCalculation } from "../types/salary";

export interface SalaryComparisonResult {
  attuale: SalaryCalculation;
  nuova: SalaryCalculation;

  differenzaMensile: number;
  differenzaAnnua: number;
  differenzaTrattenute: number;
}

export function compareSalaries(
  ralAttuale: number,
  ralNuova: number,
  mensilita: number
): SalaryComparisonResult {
  const attuale = calculateSalary(
    ralAttuale,
    mensilita
  );

  const nuova = calculateSalary(
    ralNuova,
    mensilita
  );

  return {
    attuale,
    nuova,

    differenzaMensile:
      nuova.nettoMensile -
      attuale.nettoMensile,

    differenzaAnnua:
      nuova.nettoAnnuo -
      attuale.nettoAnnuo,

    differenzaTrattenute:
      nuova.trattenute -
      attuale.trattenute,
  };
}