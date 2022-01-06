import { User } from './User';

/**
 * Forme d'une requête pour enregistrer un utilisateur
 */
export type UserReqRegistration = Omit<
  User,
  'id' | 'created_at' | 'updated_at'
>;
