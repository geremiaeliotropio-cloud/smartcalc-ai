export default function PrivacyPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          Privacy Policy
        </h1>

        <p className="mt-6 text-slate-300">
          La tua privacy è importante per SmartCalc AI.
          Questa pagina descrive come vengono gestiti i dati
          raccolti durante l'utilizzo del sito.
        </p>

        <div className="mt-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-cyan-400">
              Raccolta dei dati
            </h2>

            <p className="mt-3 text-slate-400">
              SmartCalc AI raccoglie solo le informazioni
              strettamente necessarie al funzionamento del sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400">
              Cookie
            </h2>

            <p className="mt-3 text-slate-400">
              Alcuni cookie tecnici possono essere utilizzati
              per migliorare l'esperienza di navigazione.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400">
              Servizi di terze parti
            </h2>

            <p className="mt-3 text-slate-400">
              In futuro potrebbero essere utilizzati servizi
              come Google Analytics per analizzare il traffico
              del sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400">
              Contatti
            </h2>

            <p className="mt-3 text-slate-400">
              Per qualsiasi richiesta relativa alla privacy è
              possibile contattarci tramite la pagina Contatti.
            </p>
          </section>

        </div>

      </section>
    </main>
  );
}