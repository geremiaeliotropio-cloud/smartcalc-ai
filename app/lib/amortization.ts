export interface Payment {
  rata: number;
  capitale: number;
  interessi: number;
  residuo: number;
}

export function generateAmortization(
  importo: number,
  tassoAnnuo: number,
  anni: number
): Payment[] {
  if (
    !Number.isFinite(importo) ||
    !Number.isFinite(tassoAnnuo) ||
    !Number.isFinite(anni) ||
    importo <= 0 ||
    tassoAnnuo <= 0 ||
    anni <= 0
  ) {
    return [];
  }

  const tassoMensile = tassoAnnuo / 100 / 12;
  const numeroRate = anni * 12;

  const rata =
    (importo *
      tassoMensile *
      Math.pow(1 + tassoMensile, numeroRate)) /
    (Math.pow(1 + tassoMensile, numeroRate) - 1);

  let residuo = importo;

  const piano: Payment[] = [];

  for (let i = 1; i <= numeroRate; i++) {
    const interessi = residuo * tassoMensile;
    const capitale = rata - interessi;

    residuo -= capitale;

    piano.push({
      rata: i,
      capitale: Number(capitale.toFixed(2)),
      interessi: Number(interessi.toFixed(2)),
      residuo: Number(
        Math.max(0, residuo).toFixed(2)
      ),
    });
  }

  return piano;
}