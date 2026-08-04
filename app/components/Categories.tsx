import Link from "next/link";
import {
  Briefcase,
  Landmark,
  PiggyBank,
  Receipt,
  Wallet,
} from "lucide-react";

const categories = [
  {
    icon: Landmark,
    title: "Finanza",
    description: "Mutui, prestiti e investimenti",
    href: "/calculators",
  },
  {
    icon: Briefcase,
    title: "Lavoro",
    description: "RAL e stipendio netto",
    href: "/calculators/stipendio",
  },
  {
    icon: Receipt,
    title: "Fisco",
    description: "IVA e imposte",
    href: "/calculators/iva",
  },
  {
    icon: PiggyBank,
    title: "Risparmio",
    description: "Interessi composti",
    href: "/calculators/interessi-composti",
  },
  {
    icon: Wallet,
    title: "Pensione",
    description: "Previdenza e TFR",
    href: "/calculators/pensione",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">

      <div className="text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300">
          📂 Categorie
        </span>

        <h2 className="mt-5 text-3xl font-bold md:text-5xl">
          Scegli una categoria
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-lg">
          Accedi rapidamente ai principali strumenti di SmartCalc AI.
        </p>

      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.title}
              href={category.href}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-800"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">

                <Icon size={30} />

              </div>

              <h3 className="mt-5 text-lg font-bold transition-colors group-hover:text-cyan-400">
                {category.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-400 md:text-sm">
                {category.description}
              </p>

              <div className="mt-5 text-sm font-semibold text-cyan-400">
                Apri →
              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}