import Link from "next/link";

import { calculators } from "../data/calculators";

import CalculatorGrid from "./CalculatorGrid";
import PrimaryButton from "./common/PrimaryButton";

export default function PopularCalculators() {
  const popularCalculators = calculators.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">

      <div className="mb-10 flex flex-col items-center justify-between gap-6 text-center md:mb-14 md:flex-row md:text-left">

        <div>

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300">
            ⭐ Più utilizzati
          </span>

          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            Calcolatori popolari
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-lg">
            I calcolatori più utilizzati dagli utenti di SmartCalc AI.
          </p>

        </div>

        <Link href="/calculators">
          <PrimaryButton className="w-full md:w-auto">
            🚀 Esplora tutti
          </PrimaryButton>
        </Link>

      </div>

      <CalculatorGrid calculators={popularCalculators} />

    </section>
  );
}