import { request } from '@playwright/test';

export async function getAuthToken() {
  const response = await request.newContext().post('https://restful-booker.herokuapp.com/auth', {
    data: {
      username: 'admin',
      password: 'password123'
    }
  });
  const body = await response.json();
  return body.token;
}

export async function createBooking() {
  const response = await request.newContext().post('https://restful-booker.herokuapp.com/booking', {
    data: {
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2024-01-01',
        checkout: '2024-01-10'
      },
      additionalneeds: 'Breakfast'
    }
  });
  const body = await response.json();
  return body.bookingid;
}
