import jwt from 'jsonwebtoken';
import { Result } from '@type/error/Error';
import { PartialSession } from '@type/session/PartialSession';
import { Session } from '@type/session/Session';

export class JwtService {
  private readonly secret: string;

  constructor() {
    if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET not set!');
    this.secret = process.env.JWT_SECRET;
  }

  public encode(payload: PartialSession, expiresIn?: string | number): string {
    const token = jwt.sign(payload, this.secret, {
      expiresIn: expiresIn ?? '7 days',
    });
    return token;
  }

  public decode(token: string): Result<Session> {
    try {
      // Lance une excepsion si invalide
      const session = jwt.verify(token, this.secret);
      return session as Session;
    } catch (error) {
      return error as jwt.JsonWebTokenError;
    }
  }
}
