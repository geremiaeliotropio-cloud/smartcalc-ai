interface Props {
  strengths?: string[];
}

export default function AdvisorStrengths({
  strengths = [],
}: Props) {
  return (
    <div className="rounded-3xl border border-green-500 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold text-green-400">
        ✅ Punti di forza
      </h2>

      {strengths.length === 0 ? (
        <p className="text-slate-400">
          Nessun punto di forza disponibile.
        </p>
      ) : (
        <ul className="space-y-3">
          {strengths.map((item, index) => (
            <li key={index}>
              • {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}