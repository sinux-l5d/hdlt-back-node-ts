import { User } from './User';

/**
 * Forme d'une requête pour modifier un utilisateur
 */
export type UserReqUpdate = Partial<
  Omit<User, 'id' | 'created_at' | 'updated_at'>
>;
