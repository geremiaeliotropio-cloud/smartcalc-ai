import Card from "../common/Card";
import ResultCard from "../common/ResultCard";

import { formatCurrency } from "../../lib/format";

interface Props {
  ralAttuale: number;
  ralNuova: number;

  nettoAttuale: number;
  nettoNuovo: number;

  differenzaMensile: number;
  differenzaAnnua: number;
}

export default function SalaryComparison({
  ralAttuale,
  ralNuova,
  nettoAttuale,
  nettoNuovo,
  differenzaMensile,
  differenzaAnnua,
}: Props) {
  return (
    <Card className="mt-10 p-8">
      <h2 className="text-3xl font-bold text-cyan-400">
        Confronto RAL
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ResultCard
          title={`RAL ${formatCurrency(ralAttuale)}`}
          value={formatCurrency(nettoAttuale)}
        />

        <ResultCard
          title={`RAL ${formatCurrency(ralNuova)}`}
          value={formatCurrency(nettoNuovo)}
        />
      </div>

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
        <h3 className="text-xl font-bold">
          Differenza
        </h3>

        <p className="mt-4">
          📈 Netto mensile:
          <strong>
            {" "}
            {formatCurrency(differenzaMensile)}
          </strong>
        </p>

        <p className="mt-3">
          💰 Netto annuale:
          <strong>
            {" "}
            {formatCurrency(differenzaAnnua)}
          </strong>
        </p>
      </div>
    </Card>
  );
}