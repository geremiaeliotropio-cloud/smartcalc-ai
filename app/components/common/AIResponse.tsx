interface Props {
  response: string;
}

export default function AIResponse({
  response,
}: Props) {
  return (
    <div className="mt-8 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-6">
      <h2 className="mb-4 text-2xl font-bold text-violet-300">
        🤖 SmartCalc AI
      </h2>

      <p className="whitespace-pre-line text-slate-200">
        {response}
      </p>
    </div>
  );
}