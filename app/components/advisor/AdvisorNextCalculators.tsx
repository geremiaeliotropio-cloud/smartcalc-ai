import Link from "next/link";

interface Props {
  calculators: string[];
}

const links: Record<string, string> = {
  stipendio: "/calculators/stipendio",
  mutuo: "/calculators/mutuo",
  prestito: "/calculators/prestito",
  pensione: "/calculators/pensione",
  iva: "/calculators/iva",
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
        {calculators.map((calculator) => (
          <Link
            key={calculator}
            href={links[calculator] ?? "/calculators"}
            className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            {calculator}
          </Link>
        ))}
      </div>
    </div>
  );
}