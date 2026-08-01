import ResultCard from "../common/ResultCard";

interface Props {
  rata: number;
  interessi: number;
  totale: number;
}

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function MortgageResults({
  rata,
  interessi,
  totale,
}: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-3xl font-bold text-cyan-400">
        {formatEuro(rata)}
      </h2>

      <p className="mt-2 text-slate-400">
        Rata Mensile
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ResultCard
          title="Interessi Totali"
          value={formatEuro(interessi)}
        />

        <ResultCard
          title="Totale Restituito"
          value={formatEuro(totale)}
        />
      </div>
    </div>
  );
}