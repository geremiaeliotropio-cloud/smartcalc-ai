import Link from "next/link";

interface Props {
  calculators: string[];
}

const links: Record<string, string> = {
  stipendio: "/calculators/stipendio",
  mutuo: "/calculators/mutuo",
  prestito: "/calculators/prestito",
  iva: "/calculators/iva",
  "interessi-composti": "/calculators/interessi-composti",
};

const labels: Record<string, string> = {
  stipendio: "💼 Stipendio",
  mutuo: "🏠 Mutuo",
  prestito: "💳 Prestito",
  iva: "🧾 IVA",
  "interessi-composti": "📈 Interessi Composti",
};

export default function AdvisorNextCalculators({
  calculators,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        🎯 Calcolatori consigliati
      </h2>

      <div className="flex flex-wrap gap-4">
        {calculators
          .filter((calculator) => links[calculator])
          .map((calculator) => (
            <Link
              key={calculator}
              href={links[calculator]}
              className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              {labels[calculator] ?? calculator}
            </Link>
          ))}
      </div>
    </div>
  );
}