import {
  Calculator,
  FileText,
  ChartColumn,
  Globe,
} from "lucide-react";

const stats = [
  {
    icon: Calculator,
    value: "5+",
    label: "Calcolatori",
  },
  {
    icon: FileText,
    value: "PDF",
    label: "Esportazione",
  },
  {
    icon: ChartColumn,
    value: "Grafici",
    label: "Interattivi",
  },
  {
    icon: Globe,
    value: "Multi",
    label: "Lingua (presto)",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-500"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Icon size={30} />
              </div>

              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-2 text-slate-400">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}