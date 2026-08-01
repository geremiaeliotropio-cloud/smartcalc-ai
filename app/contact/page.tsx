export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          Contatti
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          Hai domande, suggerimenti o hai trovato un errore?
          Scrivici, saremo felici di aiutarti.
        </p>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <div className="space-y-6">

            <div>
              <p className="text-sm text-slate-400">
                Email
              </p>

              <h2 className="text-xl font-semibold">
                info@smartcalcai.it
              </h2>
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Orari
              </p>

              <h2 className="text-xl font-semibold">
                Lunedì - Venerdì
              </h2>

              <p className="text-slate-400">
                09:00 - 18:00
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Supporto
              </p>

              <p className="text-slate-300">
                Rispondiamo normalmente entro 24 ore.
              </p>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
