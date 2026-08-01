import {
  Briefcase,
  HeartPulse,
  Landmark,
  PiggyBank,
  Receipt,
} from "lucide-react";

const categories = [
  {
    icon: Landmark,
    title: "Finanza",
    description: "Mutui, prestiti e investimenti.",
  },
  {
    icon: Briefcase,
    title: "Lavoro",
    description: "Stipendio netto, RAL e tasse.",
  },
  {
    icon: Receipt,
    title: "Fisco",
    description: "IVA e calcoli fiscali.",
  },
  {
    icon: PiggyBank,
    title: "Risparmio",
    description: "Interessi composti e crescita del capitale.",
  },
  {
    icon: HeartPulse,
    title: "Salute",
    description: "BMI e altri strumenti dedicati.",
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
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-500"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Icon size={30} />
              </div>

              <h3 className="text-xl font-bold">
                {category.title}
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                {category.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}