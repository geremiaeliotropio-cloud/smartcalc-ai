import Card from "../common/Card";
import ResultCard from "../common/ResultCard";

import { formatCurrency } from "../../lib/format";

interface Props {
  nettoMensile: number;
  nettoAnnuo: number;
  trattenute: number;
}

export default function SalaryResults({
  nettoMensile,
  nettoAnnuo,
  trattenute,
}: Props) {
  return (
    <Card className="mt-10 p-8">
      <h2 className="text-3xl font-bold text-cyan-400">
        Risultato
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <ResultCard
          title="Netto Mensile"
          value={formatCurrency(nettoMensile)}
        />

        <ResultCard
          title="Netto Annuo"
          value={formatCurrency(nettoAnnuo)}
        />

        <ResultCard
          title="Trattenute Stimate"
          value={formatCurrency(trattenute)}
          valueColor="text-red-400"
        />
      </div>
    </Card>
  );
}