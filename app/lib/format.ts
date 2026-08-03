const currencyFormatter = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("it-IT");

export function formatCurrency(value: number): string {
  if (!Number.isFinite(value)) {
    return "€ 0,00";
  }

  return currencyFormatter.format(value);
}

export function formatPercent(value: number): string {
  if (!Number.isFinite(value)) {
    return "0,00%";
  }

  return `${value.toFixed(2)}%`;
}

export function formatNumber(value: number): string {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return numberFormatter.format(value);
}