/**
 * Session contenant les informations de l'utilisateur authentifié.
 * Cette object est envoyé au client dans un Json Web Token.
 */
export type Session = {
  userid: number;
  username: string;
};
