import { test, expect } from '@playwright/test';

test('Complete checkout flow', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('text=Add to cart', { strict: false });
  await page.click('.shopping_cart_link');
  await page.click('#checkout');
  await page.fill('#first-name', 'Sim');
  await page.fill('#last-name', 'Tauzeni');
  await page.fill('#postal-code', '1000');
  await page.click('#continue');
  await page.click('#finish');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
