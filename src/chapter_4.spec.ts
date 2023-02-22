import { test, expect } from '@playwright/test';

// test.use({
//   headless: false
// })

test('it should click on getting started', async ({ page }) => {
  await Promise.all([page.goto('https://playwright.dev/'), page.waitForLoadState('networkidle')]);
  await Promise.all([page.getByText('Get started').click(), page.waitForNavigation()]);
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});

test.only('it should search for locators', async ({ page }) => {
  await Promise.all([page.goto('https://playwright.dev/'), page.waitForLoadState('networkidle')]);
  await page.getByText('Search').click();
  await Promise.all([
    page.getByPlaceholder('Search docs').fill('locators'),
    page.waitForResponse(/^https:\/\/.*.algolia.net\/1\/indexes\/\*\/queries\?/),
  ]);
  await Promise.all([
    page.keyboard.press('Enter'),
    page.waitForNavigation()
  ]);
  await expect(page).toHaveURL('https://playwright.dev/docs/locators');
});
