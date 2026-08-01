"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

interface Props {
  capitale: number;
  interessi: number;
}

export default function MortgageChart({
  capitale,
  interessi,
}: Props) {
  const data = [
    {
      name: "Capitale",
      value: capitale,
    },
    {
      name: "Interessi",
      value: interessi,
    },
  ];

  const COLORS = ["#06b6d4", "#334155"];

  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Ripartizione del mutuo
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}