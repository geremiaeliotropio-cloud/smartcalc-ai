import type { SalaryCalculation } from "../../types/salary";

import {
  saveToStorage,
  getFromStorage,
  clearFromStorage,
} from "./utils";

const STORAGE_KEY = "smartcalc-salary";

export interface SavedSalaryCalculation
  extends SalaryCalculation {
  ral: number;
  mensilita: number;
  createdAt: string;
}

export function saveSalaryCalculation(
  data: SavedSalaryCalculation
): void {
  saveToStorage(STORAGE_KEY, data);
}

export function getSalaryCalculation():
  | SavedSalaryCalculation
  | null {
  return getFromStorage<SavedSalaryCalculation>(
    STORAGE_KEY
  );
}

export function clearSalaryCalculation(): void {
  clearFromStorage(STORAGE_KEY);
}