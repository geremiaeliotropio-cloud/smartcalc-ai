import type { SalaryCalculation } from "../../types/salary";

export interface SavedSalaryCalculation
  extends SalaryCalculation {
  ral: number;
  mensilita: number;
  createdAt: string;
}

const STORAGE_KEY = "smartcalc-salary";

export function saveSalaryCalculation(
  data: SavedSalaryCalculation
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function getSalaryCalculation():
  | SavedSalaryCalculation
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

export function clearSalaryCalculation() {
  localStorage.removeItem(STORAGE_KEY);
}