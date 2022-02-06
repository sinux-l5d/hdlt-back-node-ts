/**
 * Session contenant les informations de l'utilisateur authentifié.
 * Cette object est envoyé au client dans un Json Web Token.
 * Il doit être envoyé avec chaque requête dans une en-tête :
 * Authorization: Bearer <JWT>
 */
export type Session = {
  userid: string;
  username: string;
  exp: number;
  iat: number;
};
