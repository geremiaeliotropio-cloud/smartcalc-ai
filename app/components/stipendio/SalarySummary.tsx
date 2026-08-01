interface Props {
  ral: number;
  mensilita: number;
}

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function SalarySummary({
  ral,
  mensilita,
}: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold text-cyan-400">
        Riepilogo
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">

        <div>
          <p className="text-slate-400">
            RAL
          </p>

          <p className="mt-2 text-xl font-bold">
            {formatEuro(ral)}
          </p>
        </div>

        <div>
          <p className="text-slate-400">
            Mensilità
          </p>

          <p className="mt-2 text-xl font-bold">
            {mensilita}
          </p>
        </div>

      </div>

    </div>
  );
}