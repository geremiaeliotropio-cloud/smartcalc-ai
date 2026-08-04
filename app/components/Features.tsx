import Link from "next/link";
import {
  Brain,
  ChartColumn,
  ShieldCheck,
  Zap,
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
      "Visualizza i risultati con grafici chiari e intuitivi per comprendere meglio ogni simulazione.",
    href: "/dashboard",
  },
  {
    icon: ShieldCheck,
    title: "Risultati Affidabili",
    description:
      "Calcoli progettati per offrire simulazioni rapide, precise e facili da interpretare.",
    href: "/calculators",
  },
  {
    icon: Zap,
    title: "Veloce e Gratuito",
    description:
      "Utilizza tutti i calcolatori direttamente dal browser, senza installazioni.",
    href: "/calculators",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="font-semibold text-cyan-400">
          Perché scegliere SmartCalc AI
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          Tutto quello che ti serve in un unico posto
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-slate-400">
          SmartCalc AI unisce precisione, velocità e una grafica moderna
          per offrirti strumenti professionali completamente gratuiti.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Link
              key={feature.title}
              href={feature.href}
              className="group block"
            >
              <div className="h-full cursor-pointer rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:bg-slate-800 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold transition group-hover:text-cyan-400">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-6 font-semibold text-cyan-400 opacity-0 transition group-hover:opacity-100">
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