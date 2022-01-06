import { Session } from '@type/session/Session';
import { JwtService } from '@services/jwt';
import { isSuccess, Result } from '@type/error/Error';
import { exitCode } from 'process';

describe('JWT Service', () => {
  const session: Session = {
    userid: 1,
    username: 'hello',
  };

  let jwt: JwtService;

  it('is initializing properly', () => {
    expect(process.env.JWT_SECRET).toBeDefined();
    jwt = new JwtService();
  });

  it('is making a retrievable token', () => {
    const encoded = jwt.encode(session);
    let decoded: Result<Session> = jwt.decode(encoded);

    expect(isSuccess(decoded)).toBeTruthy();

    // On est maintenant sûr que ce soit une Session
    decoded = decoded as Session;
    expect(decoded.userid).toBe(session.userid);
    expect(decoded.username).toBe(session.username);
  });

  it('is making expirable token', () => {
    const encoded = jwt.encode(session, 1);
    const decoded = jwt.decode(encoded);
  });
});
