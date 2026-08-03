import jsPDF from "jspdf";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

function createDocument(title: string): jsPDF {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("SmartCalc AI", 20, 20);

  doc.setFontSize(14);
  doc.text(title, 20, 35);

  doc.setFontSize(12);

  return doc;
}

function addLine(doc: jsPDF, y: number) {
  doc.line(20, y, 190, y);
}

export function exportCompoundPDF(
  capitale: number,
  versamento: number,
  tasso: number,
  anni: number,
  investito: number,
  interessi: number,
  totale: number
) {
  const doc = createDocument(
    "Report Interessi Composti"
  );

  doc.text(
    `Capitale iniziale: ${formatCurrency(capitale)}`,
    20,
    55
  );

  doc.text(
    `Versamento mensile: ${formatCurrency(
      versamento
    )}`,
    20,
    65
  );

  doc.text(
    `Tasso annuo: ${tasso.toFixed(2)}%`,
    20,
    75
  );

  doc.text(`Durata: ${anni} anni`, 20, 85);

  addLine(doc, 92);

  doc.text(
    `Capitale investito: ${formatCurrency(
      investito
    )}`,
    20,
    105
  );

  doc.text(
    `Interessi maturati: ${formatCurrency(
      interessi
    )}`,
    20,
    115
  );

  doc.text(
    `Totale finale: ${formatCurrency(
      totale
    )}`,
    20,
    125
  );

  doc.save("smartcalc-interessi-composti.pdf");
}

export function exportSalaryPDF(
  ral: number,
  mensilita: number,
  nettoMensile: number,
  nettoAnnuo: number,
  trattenute: number,
  contributi: number,
  imponibile: number,
  irpef: number,
  addizionali: number
) {
  const doc = createDocument(
    "Report Stipendio Netto"
  );

  doc.text(
    `RAL: ${formatCurrency(ral)}`,
    20,
    55
  );

  doc.text(
    `Mensilità: ${mensilita}`,
    20,
    65
  );

  addLine(doc, 72);

  doc.text(
    `Netto annuo: ${formatCurrency(
      nettoAnnuo
    )}`,
    20,
    85
  );

  doc.text(
    `Netto mensile: ${formatCurrency(
      nettoMensile
    )}`,
    20,
    95
  );

  doc.text(
    `Contributi: ${formatCurrency(
      contributi
    )}`,
    20,
    110
  );

  doc.text(
    `Imponibile fiscale: ${formatCurrency(
      imponibile
    )}`,
    20,
    120
  );

  doc.text(
    `IRPEF: ${formatCurrency(irpef)}`,
    20,
    130
  );

  doc.text(
    `Addizionali: ${formatCurrency(
      addizionali
    )}`,
    20,
    140
  );

  doc.text(
    `Totale trattenute: ${formatCurrency(
      trattenute
    )}`,
    20,
    150
  );

  doc.save("smartcalc-stipendio.pdf");
}