import { Session } from './Session';

export type PartialSession = Omit<Session, 'exp' | 'iat'>;
