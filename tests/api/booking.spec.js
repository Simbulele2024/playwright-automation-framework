import { test, expect, request } from '@playwright/test';
import { bookingPayload } from '../../utils/testDataManager.js';

test('Create and retrieve booking', async () => {
  const context = await request.newContext({
  ignoreHTTPSErrors: true,});
  const res = await context.post('https://restful-booker.herokuapp.com/booking', { data: bookingPayload });
  expect(res.status()).toBe(200);
  const { bookingid } = await res.json();

  const getRes = await context.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`);
  expect(getRes.status()).toBe(200);
  const booking = await getRes.json();
  expect(booking.firstname).toBe(bookingPayload.firstname);
});
