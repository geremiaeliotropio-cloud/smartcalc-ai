"use client";

interface Props {
  onClick: () => void;
}

export default function SalaryPdfButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="mt-8 w-full rounded-xl bg-emerald-500 py-4 font-semibold text-slate-950 transition hover:bg-emerald-400"
    >
      📄 Scarica PDF
    </button>
  );
}
