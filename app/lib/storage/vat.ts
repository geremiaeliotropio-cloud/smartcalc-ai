import {
  saveToStorage,
  getFromStorage,
  clearFromStorage,
} from "./utils";

const STORAGE_KEY = "smartcalc-vat";

export interface SavedVatCalculation {
  imponibile: number;
  aliquota: number;

  iva: number;
  totale: number;

  createdAt: string;
}

export function saveVatCalculation(
  data: SavedVatCalculation
): void {
  saveToStorage(STORAGE_KEY, data);
}

export function getVatCalculation():
  | SavedVatCalculation
  | null {
  return getFromStorage<SavedVatCalculation>(
    STORAGE_KEY
  );
}

export function clearVatCalculation(): void {
  clearFromStorage(STORAGE_KEY);
}