interface Props {
  title: string;
  value: string;
  valueColor?: string;
}

export default function ResultCard({
  title,
  value,
  valueColor = "text-white",
}: Props) {
  return (
    <div className="rounded-xl bg-slate-800 p-5">
      <p className="text-slate-400">
        {title}
      </p>

      <h3 className={`mt-2 text-2xl font-bold ${valueColor}`}>
        {value}
      </h3>
    </div>
  );
}