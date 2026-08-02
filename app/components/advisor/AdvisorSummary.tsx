interface Props {
  summary: string;
}

export default function AdvisorSummary({
  summary,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold">
        📊 Situazione
      </h2>

      <p className="leading-8 text-slate-300">
        {summary}
      </p>
    </div>
  );
}