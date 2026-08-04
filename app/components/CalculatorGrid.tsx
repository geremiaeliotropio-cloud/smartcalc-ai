import CalculatorCard from "./CalculatorCard";
import { CalculatorItem } from "../data/calculators";

interface Props {
  calculators: CalculatorItem[];
}

export default function CalculatorGrid({
  calculators,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {calculators.map((calculator) => (
        <CalculatorCard
          key={calculator.id}
          href={calculator.href}
          title={calculator.title}
          description={calculator.description}
          category={calculator.category}
          icon={calculator.icon}
        />
      ))}
    </div>
  );
}