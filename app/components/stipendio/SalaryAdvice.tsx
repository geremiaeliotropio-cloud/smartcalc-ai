import Card from "../common/Card";

interface Props {
  ral: number;
  nettoMensile: number;
  mensilita: number;
}

export default function SalaryAdvice({
  ral,
  nettoMensile,
  mensilita,
}: Props) {
  const consigli: string[] = [];

  if (ral < 28000) {
    consigli.push(
      "💡 Verifica se hai diritto a detrazioni o bonus che potrebbero aumentare il netto."
    );
  }

  if (ral >= 28000 && ral < 50000) {
    consigli.push(
      "📈 Un aumento della RAL incrementerà il netto, ma una parte sarà soggetta a tassazione più elevata."
    );
  }

  if (ral >= 50000) {
    consigli.push(
      "🏛️ Con questa RAL è particolarmente importante valutare welfare aziendale e benefit."
    );
  }

  if (mensilita === 14) {
    consigli.push(
      "📅 Con 14 mensilità riceverai importi mensili leggermente inferiori rispetto alle 13 mensilità, mantenendo lo stesso netto annuo."
    );
  }

  if (nettoMensile > 2500) {
    consigli.push(
      "💰 Hai un buon netto mensile: valuta un piano di investimento per far crescere il capitale nel tempo."
    );
  }

  return (
    <Card className="mt-10 p-8">
      <h2 className="text-3xl font-bold text-cyan-400">
        Consigli personalizzati
      </h2>

      <div className="mt-8 space-y-4">
        {consigli.map((consiglio, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-900 p-4"
          >
            {consiglio}
          </div>
        ))}
      </div>
    </Card>
  );
}