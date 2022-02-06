/**
 * Forme d'un statuts
 */
export type Status = {
  id: string;
  lawId: number;
  description: string;
  date: Date;
  paye: boolean;
  created_at?: Date;
  updated_at?: Date;
};
