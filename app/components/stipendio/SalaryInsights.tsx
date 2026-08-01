import Card from "../common/Card";
import { formatCurrency } from "../../lib/format";

interface Props {
  ral: number;
  nettoMensile: number;
  nettoAnnuo: number;
  trattenute: number;
}

export default function SalaryInsights({
  ral,
  nettoMensile,
  nettoAnnuo,
  trattenute,
}: Props) {
  const percentuale = ((trattenute / ral) * 100).toFixed(1);

  let fascia = "";

  if (ral < 28000) {
    fascia =
      "La tua RAL rientra nella fascia di reddito più bassa, con una tassazione generalmente più contenuta.";
  } else if (ral < 50000) {
    fascia =
      "La tua RAL rientra nella fascia intermedia. Parte del reddito è soggetta a un'aliquota IRPEF più elevata.";
  } else {
    fascia =
      "La tua RAL rientra nella fascia alta, dove una quota del reddito è tassata con l'aliquota massima prevista dalla simulazione.";
  }

  return (
    <Card className="mt-10 p-8">
      <h2 className="text-3xl font-bold text-cyan-400">
        Analisi del risultato
      </h2>

      <div className="mt-8 space-y-5 leading-8 text-slate-300">
        <p>
          💶 Il tuo <strong>netto annuo stimato</strong> è di{" "}
          <strong>{formatCurrency(nettoAnnuo)}</strong>.
        </p>

        <p>
          📅 Il tuo <strong>netto mensile stimato</strong> è di{" "}
          <strong>{formatCurrency(nettoMensile)}</strong>.
        </p>

        <p>
          🏛️ Le trattenute rappresentano circa{" "}
          <strong>{percentuale}%</strong> della tua RAL.
        </p>

        <p>📊 {fascia}</p>

        <p>
          📈 Un eventuale aumento della RAL comporterà un incremento
          del netto, ma una parte sarà assorbita dalla tassazione.
        </p>

        <p className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
          ℹ️ Questa simulazione ha finalità informative e non sostituisce
          il calcolo ufficiale della busta paga.
        </p>
      </div>
    </Card>
  );
}