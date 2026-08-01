export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          Chi siamo
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          SmartCalc AI nasce con l'obiettivo di offrire
          una piattaforma moderna, semplice e gratuita
          per eseguire calcoli finanziari, fiscali e
          quotidiani in pochi secondi.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-cyan-400">
              🎯 Missione
            </h2>

            <p className="mt-4 text-slate-400">
              Rendere semplici anche i calcoli più complessi
              attraverso strumenti intuitivi e accessibili.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-cyan-400">
              🚀 Visione
            </h2>

            <p className="mt-4 text-slate-400">
              Diventare il punto di riferimento italiano
              per i calcolatori online.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-cyan-400">
              💡 Valori
            </h2>

            <p className="mt-4 text-slate-400">
              Trasparenza, semplicità, affidabilità e
              innovazione continua.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}