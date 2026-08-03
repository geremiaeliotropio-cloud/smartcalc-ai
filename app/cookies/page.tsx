export default function CookiesPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Cookie Policy
        </h1>

        <p className="mt-6 text-slate-300">
          Questa pagina descrive come SmartCalc AI utilizza i cookie
          per migliorare l&apos;esperienza di navigazione.
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-cyan-400">
              Cosa sono i cookie
            </h2>

            <p className="mt-3 text-slate-400">
              I cookie sono piccoli file salvati sul dispositivo
              dell&apos;utente che permettono al sito di funzionare
              correttamente e ricordare alcune preferenze.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400">
              Cookie tecnici
            </h2>

            <p className="mt-3 text-slate-400">
              Utilizziamo cookie tecnici indispensabili per il corretto
              funzionamento della piattaforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400">
              Cookie analitici
            </h2>

            <p className="mt-3 text-slate-400">
              In futuro potranno essere utilizzati strumenti statistici
              come Google Analytics per comprendere l&apos;utilizzo del sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400">
              Gestione dei cookie
            </h2>

            <p className="mt-3 text-slate-400">
              È possibile gestire o eliminare i cookie direttamente
              dalle impostazioni del proprio browser.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}