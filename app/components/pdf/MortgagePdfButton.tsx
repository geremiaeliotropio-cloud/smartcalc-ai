"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Riga {
  rata: number;
  capitale: number;
  interessi: number;
  residuo: number;
}

interface Props {
  importo: number;
  tasso: number;
  anni: number;
  rata: number;
  interessi: number;
  totale: number;
  piano: Riga[];
}

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function MortgagePdfButton({
  importo,
  tasso,
  anni,
  rata,
  interessi,
  totale,
  piano,
}: Props) {
  function generaPdf() {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("SmartCalc AI", 14, 18);

    doc.setFontSize(16);
    doc.text("Simulazione Mutuo", 14, 30);

    doc.setFontSize(12);

    doc.text(`Importo: ${formatEuro(importo)}`, 14, 45);
    doc.text(`Tasso: ${tasso}%`, 14, 53);
    doc.text(`Durata: ${anni} anni`, 14, 61);

    doc.text(`Rata: ${formatEuro(rata)}`, 14, 75);
    doc.text(`Interessi: ${formatEuro(interessi)}`, 14, 83);
    doc.text(`Totale: ${formatEuro(totale)}`, 14, 91);

    autoTable(doc, {
      startY: 105,
      head: [["Rata", "Capitale", "Interessi", "Residuo"]],
      body: piano.map((r) => [
        r.rata,
        formatEuro(r.capitale),
        formatEuro(r.interessi),
        formatEuro(r.residuo),
      ]),
      styles: {
        fontSize: 9,
      },
    });

    doc.save("mutuo-smartcalc.pdf");
  }

  return (
    <button
      onClick={generaPdf}
      className="mt-8 w-full rounded-xl bg-emerald-500 py-4 font-semibold text-slate-950 transition hover:bg-emerald-400"
    >
      📄 Scarica PDF
    </button>
  );
}