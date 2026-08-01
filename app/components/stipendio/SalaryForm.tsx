interface Props {
  ral: string;
  mensilita: string;

  setRal: (value: string) => void;
  setMensilita: (value: string) => void;

  onCalculate: () => void;
}

export default function SalaryForm({
  ral,
  mensilita,
  setRal,
  setMensilita,
  onCalculate,
}: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <div className="space-y-6">

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            RAL (€)
          </label>

          <input
            type="number"
            value={ral}
            onChange={(e) => setRal(e.target.value)}
            placeholder="Es. 30000"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Mensilità
          </label>

          <select
            value={mensilita}
            onChange={(e) => setMensilita(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
          >
            <option value="13">13 Mensilità</option>
            <option value="14">14 Mensilità</option>
          </select>
        </div>

        <button
          onClick={onCalculate}
          className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Calcola Stipendio
        </button>

      </div>

    </div>
  );
}
