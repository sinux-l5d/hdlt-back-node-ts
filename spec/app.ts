import request from 'supertest';
import app from '@app';

describe('Environment', () => {
  it('is loaded', () => {
    expect(process.env.NODE_ENV).toBe('test');
    expect(process.env.JWT_SECRET).toBeDefined();
  });
});

describe('Path /', () => {
  // it is an alias for test
  it('is JSON-encoded', async () => {
    const res = await request(app).get('/');

    expect(res.headers).toHaveProperty('content-type');
    expect(res.headers['content-type']).toContain('application/json');
  });

  it('contains hello world', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({ message: 'Hello World !' });
  });
});
