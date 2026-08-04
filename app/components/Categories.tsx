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
    description: "Mutui, prestiti e investimenti.",
    href: "/calculators",
  },
  {
    icon: Briefcase,
    title: "Lavoro",
    description: "Stipendio netto, RAL e confronto stipendi.",
    href: "/calculators/stipendio",
  },
  {
    icon: Receipt,
    title: "Fisco",
    description: "IVA e strumenti fiscali.",
    href: "/calculators/iva",
  },
  {
    icon: PiggyBank,
    title: "Risparmio",
    description: "Interessi composti e crescita del capitale.",
    href: "/calculators/interessi-composti",
  },
  {
    icon: Wallet,
    title: "Pensioni",
    description: "Simulazioni pensionistiche e previdenza.",
    href: "/calculators/pensione",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="font-semibold text-cyan-400">
          Esplora per categoria
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          Tutti i calcolatori organizzati
        </h2>

        <p className="mt-4 text-slate-400">
          Clicca su una categoria per iniziare.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.title}
              href={category.href}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:bg-slate-800 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition group-hover:scale-110">
                <Icon size={30} />
              </div>

              <h3 className="text-xl font-bold transition group-hover:text-cyan-400">
                {category.title}
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                {category.description}
              </p>

              <div className="mt-6 font-semibold text-cyan-400">
                Apri →
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}