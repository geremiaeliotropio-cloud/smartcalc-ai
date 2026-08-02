interface Props {
  recommendations: string[];
}

export default function AdvisorRecommendations({
  recommendations,
}: Props) {
  return (
    <div className="rounded-3xl border border-blue-500 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold text-blue-400">
        💡 Consigli
      </h2>

      <ul className="space-y-3">
        {recommendations.map((item, index) => (
          <li key={index}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}