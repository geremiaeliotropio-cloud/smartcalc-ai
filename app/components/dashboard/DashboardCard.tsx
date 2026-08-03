"use client";

import Link from "next/link";

interface DashboardCardProps {
  icon: string;
  title: string;
  value: string;
  subtitle?: string;
  color: "cyan" | "emerald" | "amber" | "violet" | "rose";
  href: string;
}

const colors = {
  cyan: {
    border: "border-cyan-500",
    text: "text-cyan-400",
    button: "bg-cyan-500 hover:bg-cyan-400",
  },
  emerald: {
    border: "border-emerald-500",
    text: "text-emerald-400",
    button: "bg-emerald-500 hover:bg-emerald-400",
  },
  amber: {
    border: "border-amber-500",
    text: "text-amber-400",
    button: "bg-amber-500 hover:bg-amber-400",
  },
  violet: {
    border: "border-violet-500",
    text: "text-violet-400",
    button: "bg-violet-500 hover:bg-violet-400",
  },
  rose: {
    border: "border-rose-500",
    text: "text-rose-400",
    button: "bg-rose-500 hover:bg-rose-400",
  },
};

export default function DashboardCard({
  icon,
  title,
  value,
  subtitle,
  color,
  href,
}: DashboardCardProps) {
  const style = colors[color];

  return (
    <div
      className={`rounded-3xl border ${style.border} bg-slate-900 p-8 shadow-lg`}
    >
      <h2 className="text-2xl font-bold">
        {icon} {title}
      </h2>

      <p
        className={`mt-6 text-4xl font-bold ${style.text}`}
      >
        {value}
      </p>

      {subtitle && (
        <p className="mt-3 text-slate-400">
          {subtitle}
        </p>
      )}

      <Link
        href={href}
        className={`mt-8 inline-flex rounded-xl px-6 py-3 font-semibold text-slate-950 transition ${style.button}`}
      >
        Apri
      </Link>
    </div>
  );
}