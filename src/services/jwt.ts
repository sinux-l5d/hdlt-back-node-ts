import { Session } from '@type/session/Session';
import jwt from 'jsonwebtoken';
import { Result } from '@type/error/Error';

export class JwtService {
  private readonly secret: string;

  constructor() {
    if (!process.env.JWT_SECRET) throw 'JWT_SECRET not set!';
    this.secret = process.env.JWT_SECRET;
  }

  public encode(payload: Session, expiresIn?: string | number): string {
    const token = jwt.sign(payload, this.secret, {
      expiresIn: expiresIn ?? '7 days',
    });
    return token;
  }

  public decode(token: string): Result<Session> {
    const session = jwt.verify(token, this.secret);
    if (typeof session === 'string') {
      return Error(`Invalid token : ${session}`);
    }

    return session as Session; // not true
  }
}
