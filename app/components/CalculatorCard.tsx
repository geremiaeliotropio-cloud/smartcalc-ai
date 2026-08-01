import Link from "next/link";
import { Calculator } from "lucide-react";

type CalculatorCardProps = {
  id: string;
  title: string;
  description: string;
  category: string;
};

export default function CalculatorCard({
  id,
  title,
  description,
  category,
}: CalculatorCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
        <Calculator size={28} />
      </div>

      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
        {category}
      </span>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {description}
      </p>

      <Link
        href={`/calculators/${id}`}
        className="mt-8 block w-full rounded-xl bg-cyan-500 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Apri
      </Link>
    </div>
  );
}