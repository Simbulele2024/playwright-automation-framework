import { test, expect, request } from '@playwright/test';
import { bookingPayload } from '../../utils/testDataManager.js';


async function getToken(ctx) {
  const res = await ctx.post('https://restful-booker.herokuapp.com/auth', {
    data: { username: 'admin', password: 'password123' }
  });
  const { token } = await res.json();
  return token;
}

test('Delete booking', async () => {
  const context = await request.newContext({
  ignoreHTTPSErrors: true,});
  const token = await getToken(context);

  const create = await context.post('https://restful-booker.herokuapp.com/booking', { data: bookingPayload });
  const { bookingid } = await create.json();

  const del = await context.delete(`https://restful-booker.herokuapp.com/booking/${bookingid}`, {
    headers: { Cookie: `token=${token}` }
  });

  expect(del.status()).toBe(201);
});
