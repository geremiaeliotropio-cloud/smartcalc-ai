interface Props {
  nettoMensile: number;
  nettoAnnuo: number;
  trattenute: number;
}

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function SalaryResults({
  nettoMensile,
  nettoAnnuo,
  trattenute,
}: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-cyan-400">
        Risultato
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-slate-800 p-6">
          <p className="text-slate-400">
            Netto Mensile
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {formatEuro(nettoMensile)}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-6">
          <p className="text-slate-400">
            Netto Annuo
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {formatEuro(nettoAnnuo)}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-6">
          <p className="text-slate-400">
            Trattenute Stimate
          </p>

          <h3 className="mt-2 text-2xl font-bold text-red-400">
            {formatEuro(trattenute)}
          </h3>
        </div>

      </div>

    </div>
  );
}