import Link from "next/link";
import { LucideIcon } from "lucide-react";

import PrimaryButton from "./common/PrimaryButton";

interface CalculatorCardProps {
  id: string;
  href: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
}

export default function CalculatorCard({
  id,
  href,
  title,
  description,
  category,
  icon: Icon,
}: CalculatorCardProps) {
  return (
    <Link href={href} className="block">
      <div className="group h-full rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
          <Icon size={28} />
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

        <div className="mt-8">
          <PrimaryButton className="w-full">
            Apri Calcolatore
          </PrimaryButton>
        </div>
      </div>
    </Link>
  );
}