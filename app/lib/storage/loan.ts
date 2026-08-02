const STORAGE_KEY = "smartcalc-loan";

export interface SavedLoanCalculation {
  importo: number;
  durata: number;
  tasso: number;

  rata: number;
  interessi: number;
  totale: number;

  createdAt: string;
}

export function saveLoanCalculation(
  data: SavedLoanCalculation
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function getLoanCalculation():
  | SavedLoanCalculation
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

export function clearLoanCalculation() {
  localStorage.removeItem(STORAGE_KEY);
}