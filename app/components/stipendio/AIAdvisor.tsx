import Card from "../common/Card";
import { SalaryAdvice } from "../../lib/advisor";

interface Props {
  advice: SalaryAdvice[];
}

export default function AIAdvisor({ advice }: Props) {
  return (
    <Card className="mt-10 p-8">
      <h2 className="text-3xl font-bold text-cyan-400">
        🤖 SmartCalc Advisor
      </h2>

      <div className="mt-8 space-y-5">
        {advice.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            <p className="mt-2 text-slate-300">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}