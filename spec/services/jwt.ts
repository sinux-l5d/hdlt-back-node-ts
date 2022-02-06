import { JwtService } from '@services/jwt';
import { isSuccess, isError, Result } from '@type/error/Error';
import { PartialSession } from '@type/session/PartialSession';
import { Session } from '@type/session/Session';
import { TokenExpiredError } from 'jsonwebtoken';

describe('JWT Service', () => {
  const session: PartialSession = {
    userid: '1',
    username: 'hello',
  };

  let jwt: JwtService;

  it('is initializing properly', () => {
    expect(process.env.JWT_SECRET).toBeDefined();
    jwt = new JwtService();
  });

  it('is making a retrievable token', () => {
    const expMs = 1000;
    const encoded = jwt.encode(session, `${expMs}ms`);
    let decoded: Result<Session> = jwt.decode(encoded);

    expect(isSuccess(decoded)).toBeTruthy();

    // On est maintenant sûr que ce soit une Session
    decoded = decoded as Session;
    expect(decoded.userid).toBe(session.userid);
    expect(decoded.username).toBe(session.username);
    expect(decoded.exp).toBeDefined();
    expect(decoded.iat).toBeDefined();
    // exp est en secondes !
    expect(decoded.exp - decoded.iat).toBe(expMs / 1000);
  });

  it('is making expirable token', async () => {
    const expMs = 1;
    const encoded = jwt.encode(session, `${expMs}ms`);

    // On attend que le token expire
    await new Promise((r) => setTimeout(r, expMs));
    const decoded: Result<Session> = jwt.decode(encoded);

    expect(isError(decoded)).toBeTruthy();
    // decoded est alors une erreur
    expect(decoded as Error).toBeInstanceOf(TokenExpiredError);
  });
});
