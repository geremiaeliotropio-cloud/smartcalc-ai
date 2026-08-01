interface Props {
  importo: number;
  tasso: number;
  anni: number;
}

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function MortgageSummary({
  importo,
  tasso,
  anni,
}: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-cyan-400">
        Riepilogo Simulazione
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400 text-sm">
            💶 Importo
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {formatEuro(importo)}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400 text-sm">
            📈 Tasso
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {tasso.toFixed(2)}%
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400 text-sm">
            📅 Durata
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {anni} anni
          </h3>
        </div>

      </div>
    </div>
  );
}