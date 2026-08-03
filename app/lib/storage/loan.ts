import {
  saveToStorage,
  getFromStorage,
  clearFromStorage,
} from "./utils";

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
): void {
  saveToStorage(STORAGE_KEY, data);
}

export function getLoanCalculation():
  | SavedLoanCalculation
  | null {
  return getFromStorage<SavedLoanCalculation>(
    STORAGE_KEY
  );
}

export function clearLoanCalculation(): void {
  clearFromStorage(STORAGE_KEY);
}