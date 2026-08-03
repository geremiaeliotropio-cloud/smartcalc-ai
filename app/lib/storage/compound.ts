import {
  saveToStorage,
  getFromStorage,
  clearFromStorage,
} from "./utils";

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
): void {
  saveToStorage(STORAGE_KEY, data);
}

export function getCompoundCalculation():
  | SavedCompoundCalculation
  | null {
  return getFromStorage<SavedCompoundCalculation>(
    STORAGE_KEY
  );
}

export function clearCompoundCalculation(): void {
  clearFromStorage(STORAGE_KEY);
}