interface Props {
  risks: string[];
}

export default function AdvisorRisks({
  risks,
}: Props) {
  return (
    <div className="rounded-3xl border border-yellow-500 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold text-yellow-400">
        ⚠️ Attenzione
      </h2>

      <ul className="space-y-3">
        {risks.map((item, index) => (
          <li key={index}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}