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
  netto: number;
  trattenute: number;
}

export default function SalaryChart({
  netto,
  trattenute,
}: Props) {
  const data = [
    {
      name: "Netto",
      value: netto,
      color: "#06b6d4",
    },
    {
      name: "Trattenute",
      value: trattenute,
      color: "#ef4444",
    },
  ];

  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold text-cyan-400">
        Ripartizione Stipendio
      </h2>

      <div className="mt-8 h-96">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={130}
              label
            >
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
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