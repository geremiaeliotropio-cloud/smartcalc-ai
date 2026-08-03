export interface SalaryAdvice {
  title: string;
  message: string;
}

export function generateSalaryAdvice(
  ral: number,
  nettoMensile: number
): SalaryAdvice[] {
  const advice: SalaryAdvice[] = [];

  if (
    !Number.isFinite(ral) ||
    !Number.isFinite(nettoMensile) ||
    ral <= 0
  ) {
    return advice;
  }

  if (ral < 28000) {
    advice.push({
      title: "Possibili agevolazioni",
      message:
        "Con una RAL inferiore a 28.000 € potresti beneficiare di detrazioni o agevolazioni fiscali. Verifica la tua situazione specifica.",
    });
  } else if (ral < 50000) {
    advice.push({
      title: "Aumento di stipendio",
      message:
        "Un aumento della RAL non si trasforma interamente in netto perché una parte sarà assorbita da contributi e imposte.",
    });
  } else {
    advice.push({
      title: "Benefit aziendali",
      message:
        "Con questa RAL può essere conveniente negoziare welfare aziendale, assicurazione sanitaria o altri benefit oltre allo stipendio.",
    });
  }

  if (nettoMensile > 2500) {
    advice.push({
      title: "Gestione del risparmio",
      message:
        "Valuta la possibilità di destinare una parte del reddito a investimenti o a un fondo di emergenza.",
    });
  }

  advice.push({
    title: "Simulazioni utili",
    message:
      "Puoi usare il calcolatore di confronto stipendi per valutare una nuova offerta di lavoro.",
  });

  return advice;
}