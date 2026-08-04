import { LucideIcon } from "lucide-react";

export interface CalculatorField {
  id: string;
  label: string;
  type: "number" | "text";
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface CalculatorResult {
  label: string;
  value: string | number;
  color?: string;
}

export interface CalculatorConfig {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;

  fields: CalculatorField[];

  calculate: (
    values: Record<string, number>
  ) => CalculatorResult[];
}