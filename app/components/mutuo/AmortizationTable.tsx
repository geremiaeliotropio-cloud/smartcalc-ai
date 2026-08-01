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
  }).format(value);

export default function AmortizationTable({ data }: Props) {
  if (data.length === 0) return null;

  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Piano di Ammortamento
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-slate-700">
            <tr>
              <th className="py-3">Rata</th>
              <th className="py-3">Capitale</th>
              <th className="py-3">Interessi</th>
              <th className="py-3">Residuo</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={row.rata}
                className="border-b border-slate-800"
              >
                <td className="py-3">{row.rata}</td>

                <td>{formatEuro(row.capitale)}</td>

                <td>{formatEuro(row.interessi)}</td>

                <td>{formatEuro(row.residuo)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}