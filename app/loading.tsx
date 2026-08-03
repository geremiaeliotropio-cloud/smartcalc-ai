export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />

        <h2 className="mt-8 text-3xl font-bold">
          SmartCalc AI
        </h2>

        <p className="mt-4 text-slate-400">
          Caricamento in corso...
        </p>
      </div>
    </main>
  );
}