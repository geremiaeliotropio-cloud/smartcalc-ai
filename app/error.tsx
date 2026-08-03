"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-xl text-center">
        <h1 className="text-7xl font-bold text-red-400">
          Oops!
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          Qualcosa è andato storto
        </h2>

        <p className="mt-4 text-slate-400">
          Si è verificato un errore imprevisto.
          Riprova oppure torna alla Home.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Riprova
          </button>

          <Link
            href="/"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-900"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </main>
  );
}