import Card from "../common/Card";
import ResultCard from "../common/ResultCard";

import { formatCurrency } from "../../lib/format";

interface Props {
  investito: number;
  interessi: number;
  totale: number;
}

export default function CompoundResults({
  investito,
  interessi,
  totale,
}: Props) {
  return (
    <Card className="mt-10 p-8">
      <h2 className="mb-8 text-3xl font-bold text-cyan-400">
        Risultato simulazione
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <ResultCard
          title="Capitale investito"
          value={formatCurrency(investito)}
        />

        <ResultCard
          title="Interessi maturati"
          value={formatCurrency(interessi)}
          valueColor="text-cyan-400"
        />

        <ResultCard
          title="Valore finale"
          value={formatCurrency(totale)}
        />
      </div>
    </Card>
  );
}