interface Props {
  investito: number;
  interessi: number;
  totale: number;
}

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function CompoundResults({
  investito,
  interessi,
  totale,
}: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="mb-8 text-3xl font-bold text-cyan-400">
        Risultato simulazione
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-slate-800 p-6">
          <p className="text-slate-400">
            Capitale investito
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {formatEuro(investito)}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-6">
          <p className="text-slate-400">
            Interessi maturati
          </p>

          <h3 className="mt-2 text-2xl font-bold text-cyan-400">
            {formatEuro(interessi)}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-6">
          <p className="text-slate-400">
            Valore finale
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {formatEuro(totale)}
          </h3>
        </div>

      </div>

    </div>
  );
}