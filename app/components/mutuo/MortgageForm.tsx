interface Props {
  importo: string;
  tasso: string;
  anni: string;
  setImporto: (value: string) => void;
  setTasso: (value: string) => void;
  setAnni: (value: string) => void;
  onCalculate: () => void;
}

export default function MortgageForm({
  importo,
  tasso,
  anni,
  setImporto,
  setTasso,
  setAnni,
  onCalculate,
}: Props) {
  return (
    <div className="mt-10 space-y-5">

      <input
        type="number"
        placeholder="Importo (€)"
        value={importo}
        onChange={(e) => setImporto(e.target.value)}
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

      <button
        onClick={onCalculate}
        className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 hover:bg-cyan-400"
      >
        Calcola rata
      </button>

    </div>
  );
}