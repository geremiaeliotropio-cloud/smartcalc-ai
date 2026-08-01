import Link from "next/link";

import { calculators } from "../data/calculators";

import CalculatorGrid from "./CalculatorGrid";
import PrimaryButton from "./common/PrimaryButton";

export default function PopularCalculators() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="font-semibold text-cyan-400">
            Più utilizzati
          </p>

          <h2 className="text-4xl font-bold">
            Calcolatori Popolari
          </h2>
        </div>

        <Link href="/calculators">
          <PrimaryButton>
            Vedi tutti
          </PrimaryButton>
        </Link>
      </div>

      <CalculatorGrid calculators={calculators} />
    </section>
  );
}