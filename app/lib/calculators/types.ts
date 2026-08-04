import type { LucideIcon } from "lucide-react";

export interface CalculatorSEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface Calculator {
  id: string;

  title: string;

  shortTitle: string;

  description: string;

  category: string;

  href: string;

  icon: LucideIcon;

  featured: boolean;

  popular: boolean;

  aiEnabled: boolean;

  difficulty: "Easy" | "Medium" | "Advanced";

  estimatedTime: number;

  keywords: string[];

  related: string[];

  seo: CalculatorSEO;
}