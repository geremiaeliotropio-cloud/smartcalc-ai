"use client";

interface Props {
  onClick: () => void;
  loading?: boolean;
}

export default function AIButton({
  onClick,
  loading = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500 disabled:opacity-50"
    >
      {loading
        ? "Analisi AI..."
        : "✨ Spiegami con AI"}
    </button>
  );
}