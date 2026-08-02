export interface SalaryCalculation {
  nettoMensile: number;
  nettoAnnuo: number;
  trattenute: number;
  contributi: number;
  imponibile: number;
  irpef: number;
  addizionali: number;
}

export interface SalaryFormData {
  ral: number;
  mensilita: number;
}