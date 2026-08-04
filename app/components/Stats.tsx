import Link from "next/link";
import {
  Calculator,
  Brain,
  ChartColumn,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Calculator,
    value: "6",
    label: "Calcolatori disponibili",
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
    value: "Grafici",
    label: "Interattivi",
    href: "/dashboard",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Online e gratuito",
    href: "/about",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="group block"
            >
              <div className="h-full cursor-pointer rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:bg-slate-800 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-bold text-cyan-400 transition group-hover:scale-105">
                  {stat.value}
                </h3>

                <p className="mt-2 text-slate-400">
                  {stat.label}
                </p>

                <div className="mt-5 font-semibold text-cyan-400 opacity-0 transition group-hover:opacity-100">
                  Scopri →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}