const STORAGE_KEY = "smartcalc-mortgage";

export interface SavedMortgageCalculation {
  importo: number;
  tasso: number;
  anni: number;

  rata: number;
  interessi: number;
  totale: number;

  createdAt: string;
}

export function saveMortgageCalculation(
  data: SavedMortgageCalculation
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function getMortgageCalculation():
  | SavedMortgageCalculation
  | null {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

export function clearMortgageCalculation() {
  localStorage.removeItem(STORAGE_KEY);
}