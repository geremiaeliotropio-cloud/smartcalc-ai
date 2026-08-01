export interface CompoundPoint {
  anno: number;
  investito: number;
  valore: number;
}

export function generateCompoundData(
  capitale: number,
  versamentoMensile: number,
  tassoAnnuo: number,
  anni: number
): CompoundPoint[] {
  const data: CompoundPoint[] = [];

  const r = tassoAnnuo / 100 / 12;

  let saldo = capitale;

  for (let anno = 1; anno <= anni; anno++) {
    for (let mese = 0; mese < 12; mese++) {
      saldo = saldo * (1 + r) + versamentoMensile;
    }

    data.push({
      anno,
      investito: capitale + versamentoMensile * anno * 12,
      valore: Number(saldo.toFixed(2)),
    });
  }

  return data;
}