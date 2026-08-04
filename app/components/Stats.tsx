import Link from "next/link";
import {
  Calculator,
  Brain,
  ChartColumn,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    icon: Calculator,
    value: "300+",
    label: "Calcolatori",
    href: "/calculators",
  },
  {
    icon: Brain,
    value: "AI",
    label: "Assistente intelligente",
    href: "/ai",
  },
  {
    icon: ChartColumn,
    value: "Dashboard",
    label: "Grafici interattivi",
    href: "/dashboard",
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    label: "Sempre disponibile",
    href: "/about",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">

      <div className="text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300">
          📊 SmartCalc AI
        </span>

        <h2 className="mt-5 text-3xl font-bold md:text-5xl">
          Numeri del progetto
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 md:text-lg">
          Una piattaforma moderna progettata per
          semplificare calcoli finanziari, fiscali e
          professionali.
        </p>

      </div>

      <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="group block"
            >
              <article className="flex h-full flex-col items-center rounded-3xl border border-slate-800 bg-slate-900/70 p-7 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-500/10">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-cyan-400 transition-transform duration-300 group-hover:scale-105 md:text-4xl">
                  {stat.value}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {stat.label}
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold text-cyan-400 opacity-80 transition-all group-hover:gap-3 group-hover:opacity-100">
                  Scopri
                  <ArrowRight size={16} />
                </div>

              </article>
            </Link>
          );
        })}

      </div>

    </section>
  );
}