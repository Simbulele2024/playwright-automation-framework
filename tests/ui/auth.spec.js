import { test, expect } from '@playwright/test';

const users = [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'locked_out_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' },
];

users.forEach(({ username, password }) => {
  test(`Login test for ${username}`, async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', username);
    await page.fill('#password', password);
    await page.click('#login-button');

    if (username === 'locked_out_user') {
       
      await expect(page).toHaveURL('https://www.saucedemo.com/');
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    } else {
      
      await expect(page).toHaveURL(/inventory/);
    }
  });
});
