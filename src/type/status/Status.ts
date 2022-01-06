/**
 * Forme d'un statuts
 */
export type Status = {
  id: number;
  lawId: number;
  description: string;
  date: Date;
  paye: boolean;
  created_at?: Date;
  updated_at?: Date;
};
