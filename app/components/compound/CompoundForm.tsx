interface Props {
  capitale: string;
  versamento: string;
  tasso: string;
  anni: string;

  setCapitale: (value: string) => void;
  setVersamento: (value: string) => void;
  setTasso: (value: string) => void;
  setAnni: (value: string) => void;

  onCalculate: () => void;
  onReset: () => void;
}

export default function CompoundForm({
  capitale,
  versamento,
  tasso,
  anni,
  setCapitale,
  setVersamento,
  setTasso,
  setAnni,
  onCalculate,
  onReset,
}: Props) {
  return (
    <div className="mt-10 space-y-5">

      <input
        type="number"
        placeholder="Capitale iniziale (€)"
        value={capitale}
        onChange={(e) => setCapitale(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
      />

      <input
        type="number"
        placeholder="Versamento mensile (€)"
        value={versamento}
        onChange={(e) => setVersamento(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
      />

      <input
        type="number"
        placeholder="Tasso annuo (%)"
        value={tasso}
        onChange={(e) => setTasso(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
      />

      <input
        type="number"
        placeholder="Durata (anni)"
        value={anni}
        onChange={(e) => setAnni(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
      />

      <div className="grid gap-4 md:grid-cols-2">

        <button
          onClick={onCalculate}
          className="rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 hover:bg-cyan-400"
        >
          Calcola
        </button>

        <button
          onClick={onReset}
          className="rounded-xl border border-slate-700 py-4 font-semibold hover:border-red-500 hover:text-red-400"
        >
          Reset
        </button>

      </div>

    </div>
  );
}