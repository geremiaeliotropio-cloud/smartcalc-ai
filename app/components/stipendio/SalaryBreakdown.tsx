import Card from "../common/Card";
import { formatCurrency } from "../../lib/format";

interface Props {
  contributi: number;
  imponibile: number;
  irpef: number;
  addizionali: number;
}

export default function SalaryBreakdown({
  contributi,
  imponibile,
  irpef,
  addizionali,
}: Props) {
  return (
    <Card className="mt-10 p-8">
      <h2 className="text-3xl font-bold text-cyan-400">
        Dettaglio fiscale
      </h2>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full">
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="py-4 text-slate-400">
                Contributi INPS
              </td>
              <td className="py-4 text-right font-semibold">
                {formatCurrency(contributi)}
              </td>
            </tr>

            <tr className="border-b border-slate-800">
              <td className="py-4 text-slate-400">
                Imponibile fiscale
              </td>
              <td className="py-4 text-right font-semibold">
                {formatCurrency(imponibile)}
              </td>
            </tr>

            <tr className="border-b border-slate-800">
              <td className="py-4 text-slate-400">
                IRPEF
              </td>
              <td className="py-4 text-right font-semibold">
                {formatCurrency(irpef)}
              </td>
            </tr>

            <tr>
              <td className="py-4 text-slate-400">
                Addizionali
              </td>
              <td className="py-4 text-right font-semibold">
                {formatCurrency(addizionali)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}