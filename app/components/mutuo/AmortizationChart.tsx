"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Payment {
  rata: number;
  capitale: number;
  interessi: number;
  residuo: number;
}

interface Props {
  data: Payment[];
}

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

export default function AmortizationChart({
  data,
}: Props) {
  if (data.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Andamento Ammortamento
      </h2>

      <div className="h-[400px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" />

            <XAxis dataKey="rata" />

            <YAxis
              tickFormatter={(value) =>
                formatEuro(Number(value))
              }
            />

            <Tooltip
              formatter={(value) => [
                formatEuro(Number(value)),
                "",
              ]}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="capitale"
              stroke="#22c55e"
              strokeWidth={3}
              dot={false}
              name="Quota Capitale"
            />

            <Line
              type="monotone"
              dataKey="interessi"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={false}
              name="Quota Interessi"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}