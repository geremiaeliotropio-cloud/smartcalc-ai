export interface SalaryResult {
  nettoAnnuo: number;
  nettoMensile: number;
  trattenute: number;
}

export function calculateSalary(
  ral: number,
  mensilita: number
): SalaryResult {
  // Versione iniziale semplificata.
  // Nei prossimi step aggiungeremo IRPEF, INPS e detrazioni.

  const percentualeNetto = 0.70;

  const nettoAnnuo = ral * percentualeNetto;
  const trattenute = ral - nettoAnnuo;
  const nettoMensile = nettoAnnuo / mensilita;

  return {
    nettoAnnuo,
    nettoMensile,
    trattenute,
  };
}