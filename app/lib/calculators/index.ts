import type { Calculator } from "./types";

export { default as salary } from "./salary";
export { default as mortgage } from "./mortgage";
export { default as loan } from "./loan";
export { default as compound } from "./compound";
export { default as vat } from "./vat";
export { default as salaryComparison } from "./salaryComparison";

import salary from "./salary";
import mortgage from "./mortgage";
import loan from "./loan";
import compound from "./compound";
import vat from "./vat";
import salaryComparison from "./salaryComparison";

export const calculators: Calculator[] = [
  salary,
  mortgage,
  loan,
  compound,
  vat,
  salaryComparison,
];

export function getCalculator(id: string) {
  return calculators.find(
    (calculator) => calculator.id === id
  );
}

export function getFeaturedCalculators() {
  return calculators.filter(
    (calculator) => calculator.featured
  );
}

export function getPopularCalculators() {
  return calculators.filter(
    (calculator) => calculator.popular
  );
}

export function getCategoryCalculators(
  category: string
) {
  return calculators.filter(
    (calculator) =>
      calculator.category === category
  );
}