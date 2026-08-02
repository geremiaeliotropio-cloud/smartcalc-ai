import type { TaxResult } from "../types/tax";

export function calculateTaxes(
  ral: number
): TaxResult {
  // Contributi INPS (stima)
  const contributi = ral * 0.0919;

  // Imponibile fiscale
  const imponibile = ral - contributi;

  // IRPEF semplificata
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

  // Addizionali regionali/comunali (stima)
  const addizionali = imponibile * 0.02;

  return {
    contributi,
    imponibile,
    irpef,
    addizionali,
    trattenute:
      contributi +
      irpef +
      addizionali,
  };
}