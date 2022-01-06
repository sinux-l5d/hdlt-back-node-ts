/**
 * Forme d'une requête pour enregistrer un statuts
 */
export type StatusReqRegistration = {
  lawId: number;
  description: string;
  date: Date;
  paye?: boolean;
};
