import Link from "next/link";
import {
  Brain,
  ChartColumn,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligenza Artificiale",
    description:
      "Analisi intelligenti e suggerimenti personalizzati per ogni simulazione.",
    href: "/ai",
  },
  {
    icon: ChartColumn,
    title: "Grafici Interattivi",
    description:
      "Visualizza i risultati con grafici chiari e intuitivi.",
    href: "/dashboard",
  },
  {
    icon: ShieldCheck,
    title: "Risultati Affidabili",
    description:
      "Calcoli precisi e semplici da interpretare.",
    href: "/calculators",
  },
  {
    icon: Zap,
    title: "Veloce e Gratuito",
    description:
      "Utilizza tutti i calcolatori senza installare nulla.",
    href: "/calculators",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">

      <div className="text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300">
          ✨ Perché SmartCalc AI
        </span>

        <h2 className="mt-5 text-3xl font-bold md:text-5xl">
          Tutto quello che ti serve
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 md:text-lg">
          SmartCalc AI unisce Intelligenza Artificiale,
          precisione e velocità per offrirti strumenti
          professionali completamente gratuiti.
        </p>

      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Link
              key={feature.title}
              href={feature.href}
              className="group block"
            >
              <article className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-500/10">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-bold transition-colors group-hover:text-cyan-400">
                  {feature.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {feature.description}
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