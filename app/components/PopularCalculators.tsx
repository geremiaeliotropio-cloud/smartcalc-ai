import {
  Calculator,
  HeartPulse,
  Landmark,
  PiggyBank,
  Receipt,
  Wallet,
} from "lucide-react";

const calculators = [
  {
    title: "Calcolatore Mutuo",
    icon: Landmark,
    category: "Finanza",
  },
  {
    title: "Calcolatore BMI",
    icon: HeartPulse,
    category: "Salute",
  },
  {
    title: "Calcolatore IVA",
    icon: Receipt,
    category: "Fisco",
  },
  {
    title: "Calcolatore Pensione",
    icon: PiggyBank,
    category: "Previdenza",
  },
  {
    title: "Calcolatore Prestito",
    icon: Wallet,
    category: "Prestiti",
  },
  {
    title: "Calcolatore Stipendio",
    icon: Calculator,
    category: "Lavoro",
  },
];

export default function PopularCalculators() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-cyan-400 font-semibold">
            Più utilizzati
          </p>

          <h2 className="text-4xl font-bold">
            Calcolatori Popolari
          </h2>
        </div>

        <button className="rounded-xl border border-slate-700 px-5 py-2 hover:border-cyan-400 hover:text-cyan-400 transition">
          Vedi tutti
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calc) => {
          const Icon = calc.icon;

          return (
            <div
              key={calc.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Icon size={28} />
              </div>

              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                {calc.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                {calc.title}
              </h3>

              <p className="mt-3 text-slate-400">
                Simulazioni precise, grafici interattivi e supporto AI.
              </p>

              <button className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-slate-950 transition group-hover:bg-cyan-400">
                Apri Calcolatore
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}