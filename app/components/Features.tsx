import {
  Brain,
  ChartColumn,
  FileText,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligenza Artificiale",
    description:
      "Analisi intelligenti e suggerimenti personalizzati per ogni simulazione.",
  },
  {
    icon: ChartColumn,
    title: "Grafici Interattivi",
    description:
      "Visualizza l'andamento dei tuoi calcoli con grafici chiari e intuitivi.",
  },
  {
    icon: FileText,
    title: "Esporta in PDF",
    description:
      "Scarica i risultati in PDF professionali pronti da condividere o stampare.",
  },
  {
    icon: Zap,
    title: "Veloce e Gratuito",
    description:
      "Tutti i calcolatori sono gratuiti e disponibili direttamente dal browser.",
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
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-cyan-500"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Icon size={30} />
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
