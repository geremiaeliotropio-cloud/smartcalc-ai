import Link from "next/link";

import PrimaryButton from "./common/PrimaryButton";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 text-center">
        <h2 className="text-5xl font-bold">
          Pronto a iniziare?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
          Scopri tutti i calcolatori di SmartCalc AI e ottieni risultati
          precisi in pochi secondi.
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/calculators">
            <PrimaryButton>
              🚀 Esplora tutti i calcolatori
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}