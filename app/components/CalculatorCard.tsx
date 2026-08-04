import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface CalculatorCardProps {
  href: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
}

export default function CalculatorCard({
  href,
  title,
  description,
  category,
  icon: Icon,
}: CalculatorCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-2xl hover:shadow-cyan-500/10">

        {/* Icona */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
          <Icon size={30} />
        </div>

        {/* Categoria */}
        <span className="mt-5 w-fit rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
          {category}
        </span>

        {/* Titolo */}
        <h3 className="mt-5 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-cyan-400 md:text-2xl">
          {title}
        </h3>

        {/* Descrizione */}
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400 md:text-base">
          {description}
        </p>

        {/* Bottone */}
        <div className="mt-8">
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition-all duration-300 group-hover:bg-cyan-400">
            <span>Apri calcolatore</span>
            <ArrowRight size={18} />
          </div>
        </div>

      </article>
    </Link>
  );
}