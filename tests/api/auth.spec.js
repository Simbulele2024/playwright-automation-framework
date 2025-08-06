import { test, expect, request } from '@playwright/test';

test('Authenticate to get token', async () => {
  const context = await request.newContext({
  ignoreHTTPSErrors: true,});
  const res = await context.post('https://restful-booker.herokuapp.com/auth', {
    data: { username: 'admin', password: 'password123' }
  });
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body).toHaveProperty('token');
});
