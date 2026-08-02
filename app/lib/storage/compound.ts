const STORAGE_KEY = "smartcalc-compound";

export interface SavedCompoundCalculation {
  capitale: number;
  versamento: number;
  tasso: number;
  anni: number;

  investito: number;
  interessi: number;
  totale: number;

  createdAt: string;
}

export function saveCompoundCalculation(
  data: SavedCompoundCalculation
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function getCompoundCalculation():
  | SavedCompoundCalculation
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

export function clearCompoundCalculation() {
  localStorage.removeItem(STORAGE_KEY);
}