/**
 * Forme d'un utilisateur
 */
export type User = {
  /**
   * Id de l'utilisateur
   */
  id: string;
  /**
   * Nom d'utilisateur affiché et servant de login.
   *
   * @remarks
   *
   * Ne doit pas contenr de majuscules, espaces, caractère spéciaux.
   */
  login: string;
  /**
   * Mot de passe hashé
   */
  password: string;
  /**
   * Date de création de l'utilisateur
   */
  created_at?: Date;
  /**
   * Date de dernière mise à jour de l'utilisateur
   */
  updated_at?: Date;
};
