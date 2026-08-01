export interface SalaryResult {
  nettoAnnuo: number;
  nettoMensile: number;
  trattenute: number;
}

export function calculateSalary(
  ral: number,
  mensilita: number
): SalaryResult {
  const contributiINPS = ral * 0.0919;

  const imponibile = ral - contributiINPS;

  let irpef = 0;

  if (imponibile <= 28000) {
    irpef = imponibile * 0.23;
  } else if (imponibile <= 50000) {
    irpef =
      28000 * 0.23 +
      (imponibile - 28000) * 0.35;
  } else {
    irpef =
      28000 * 0.23 +
      22000 * 0.35 +
      (imponibile - 50000) * 0.43;
  }

  const addizionali = imponibile * 0.02;

  const nettoAnnuo =
    ral -
    contributiINPS -
    irpef -
    addizionali;

  return {
    nettoAnnuo,
    nettoMensile: nettoAnnuo / mensilita,
    trattenute: ral - nettoAnnuo,
  };
}