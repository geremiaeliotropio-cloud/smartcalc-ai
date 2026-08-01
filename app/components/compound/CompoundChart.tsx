"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

interface Props {
  data: {
    anno: number;
    investito: number;
    valore: number;
  }[];
}

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

export default function CompoundChart({ data }: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-cyan-400">
        Crescita dell'investimento
      </h2>

      <div className="mt-8 h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="anno" />

            <YAxis tickFormatter={(value) => formatEuro(value)} />

            <Tooltip
              formatter={(value: number) => formatEuro(value)}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="investito"
              name="Capitale investito"
              stroke="#94a3b8"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="valore"
              name="Valore finale"
              stroke="#06b6d4"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}