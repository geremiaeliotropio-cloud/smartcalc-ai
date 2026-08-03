import {
  saveToStorage,
  getFromStorage,
  clearFromStorage,
} from "./utils";

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
): void {
  saveToStorage(STORAGE_KEY, data);
}

export function getMortgageCalculation():
  | SavedMortgageCalculation
  | null {
  return getFromStorage<SavedMortgageCalculation>(
    STORAGE_KEY
  );
}

export function clearMortgageCalculation(): void {
  clearFromStorage(STORAGE_KEY);
}