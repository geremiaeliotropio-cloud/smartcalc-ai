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
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function getVatCalculation():
  | SavedVatCalculation
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

export function clearVatCalculation() {
  localStorage.removeItem(STORAGE_KEY);
}