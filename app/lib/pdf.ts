import jsPDF from "jspdf";

export function exportCompoundPDF(
  capitale: number,
  versamento: number,
  tasso: number,
  anni: number,
  investito: number,
  interessi: number,
  totale: number
) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("SmartCalc AI", 20, 20);

  doc.setFontSize(14);
  doc.text("Report Interessi Composti", 20, 35);

  doc.setFontSize(12);

  doc.text(`Capitale iniziale: € ${capitale}`, 20, 55);
  doc.text(`Versamento mensile: € ${versamento}`, 20, 65);
  doc.text(`Tasso annuo: ${tasso}%`, 20, 75);
  doc.text(`Durata: ${anni} anni`, 20, 85);

  doc.line(20, 92, 190, 92);

  doc.text(`Capitale investito: € ${investito.toFixed(2)}`, 20, 105);
  doc.text(`Interessi maturati: € ${interessi.toFixed(2)}`, 20, 115);
  doc.text(`Totale finale: € ${totale.toFixed(2)}`, 20, 125);

  doc.save("smartcalc-interessi-composti.pdf");
  
}
export function exportSalaryPDF(
  ral: number,
  mensilita: number,
  nettoMensile: number,
  nettoAnnuo: number,
  trattenute: number
) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("SmartCalc AI", 20, 20);

  doc.setFontSize(14);
  doc.text("Report Stipendio Netto", 20, 35);

  doc.setFontSize(12);

  doc.text(`RAL: € ${ral}`, 20, 55);
  doc.text(`Mensilità: ${mensilita}`, 20, 65);

  doc.line(20, 72, 190, 72);

  doc.text(`Netto annuo: € ${nettoAnnuo.toFixed(2)}`, 20, 85);
  doc.text(`Netto mensile: € ${nettoMensile.toFixed(2)}`, 20, 95);
  doc.text(`Trattenute: € ${trattenute.toFixed(2)}`, 20, 105);

  doc.save("smartcalc-stipendio.pdf");
}