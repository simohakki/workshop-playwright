import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search docs').fill('locators');
  await page.getByPlaceholder('Search docs').press('Enter');
  await page
    .getByRole('paragraph')
    .filter({ hasText: "Locators are the central piece of Playwright's auto-waiting and retry-ability. I" })
    .getByRole('link', { name: 'Locator' })
    .click();
  await page.getByRole('link', { name: 'clear' }).click();
});