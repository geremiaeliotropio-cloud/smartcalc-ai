interface Props {
  title: string;
  value: string;
}

export default function ResultCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-800 p-5">
      <p className="text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {value}
      </h3>
    </div>
  );
}