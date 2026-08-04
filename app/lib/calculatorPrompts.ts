export function buildCalculatorPrompt(
  calculator: string,
  data: Record<string, unknown>
) {
  const prompts: Record<
    string,
    (data: Record<string, unknown>) => string
  > = {
    mutuo: buildMortgagePrompt,
    stipendio: buildSalaryPrompt,
    prestito: buildLoanPrompt,
    iva: buildVatPrompt,
    pensione: buildPensionPrompt,
    irpef: buildIrpefPrompt,
    tfr: buildTfrPrompt,
    tredicesima: buildThirteenthPrompt,
    "interessi-composti": buildCompoundInterestPrompt,
  };

  const builder =
    prompts[calculator] ?? buildGenericPrompt;

  return builder(data);
}

function buildGenericPrompt(
  data: Record<string, unknown>
) {
  return `
Sei SmartCalc AI.

Analizza i seguenti risultati.

${JSON.stringify(data, null, 2)}

Spiega:

- riepilogo
- interpretazione
- vantaggi
- svantaggi
- consigli pratici

Rispondi in italiano.
`;
}

function buildMortgagePrompt(
  data: Record<string, unknown>
) {
  return `
Sei SmartCalc AI.

Analizza questo mutuo.

${JSON.stringify(data, null, 2)}

Spiega:

- riepilogo
- rata
- interessi
- sostenibilità
- possibili alternative
- consigli pratici

Rispondi in italiano.
`;
}

function buildSalaryPrompt(
  data: Record<string, unknown>
) {
  return `
Sei SmartCalc AI.

Analizza questo stipendio.

${JSON.stringify(data, null, 2)}

Spiega:

- netto
- tasse
- contributi
- interpretazione
- consigli

Rispondi in italiano.
`;
}

function buildLoanPrompt(
  data: Record<string, unknown>
) {
  return `
Analizza questo prestito.

${JSON.stringify(data, null, 2)}

Spiega:

- rata
- interessi
- costo totale
- convenienza
- consigli

Rispondi in italiano.
`;
}

function buildVatPrompt(
  data: Record<string, unknown>
) {
  return `
Analizza questo calcolo IVA.

${JSON.stringify(data, null, 2)}

Spiega:

- imponibile
- IVA
- totale
- interpretazione

Rispondi in italiano.
`;
}

function buildPensionPrompt(
  data: Record<string, unknown>
) {
  return `
Analizza questa simulazione pensionistica.

${JSON.stringify(data, null, 2)}

Spiega:

- pensione stimata
- sostenibilità
- consigli

Rispondi in italiano.
`;
}

function buildIrpefPrompt(
  data: Record<string, unknown>
) {
  return `
Analizza questo calcolo IRPEF.

${JSON.stringify(data, null, 2)}

Spiega:

- imposta
- aliquota
- reddito netto
- consigli fiscali

Rispondi in italiano.
`;
}

function buildTfrPrompt(
  data: Record<string, unknown>
) {
  return `
Analizza questo TFR.

${JSON.stringify(data, null, 2)}

Spiega:

- TFR maturato
- interpretazione
- consigli

Rispondi in italiano.
`;
}

function buildThirteenthPrompt(
  data: Record<string, unknown>
) {
  return `
Analizza questa tredicesima.

${JSON.stringify(data, null, 2)}

Spiega:

- importo
- significato
- consigli

Rispondi in italiano.
`;
}

function buildCompoundInterestPrompt(
  data: Record<string, unknown>
) {
  return `
Analizza questo investimento.

${JSON.stringify(data, null, 2)}

Spiega:

- crescita
- rendimento
- interpretazione
- consigli

Rispondi in italiano.
`;
}