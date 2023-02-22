import playwright from 'playwright';

const run = async (browserType: 'firefox' | 'chromium') => {
  // const browser = await playwright.chromium.launch();
  // const browser = await playwright.chromium.launch({
  //   headless: false,
  // });
  const browser = await playwright[browserType].launch();
  const browserTypeName = (await browser.browserType()).name();
  const contextOption: playwright.BrowserContextOptions = {
    ...playwright.devices['Pixel 4'],
  };
  if (browserType === 'firefox') {
    contextOption.isMobile = false;
  }
  const mobileContext = await browser.newContext(contextOption);
  const page = await browser.newPage();
  await page.goto('https://playwright.dev/');
    console.log(await page.title());
  
  await page.emulateMedia({
    colorScheme: 'dark',
  });

  await page.screenshot({
    path: `src/screenshot/${browserType}_homepage.png`,
    fullPage: true,
  });
  
  await page.screenshot({
    path: `src/screenshot/${browserType}_homepage_dark.png`,
    fullPage: true,
  });

  await browser.close();
};
Promise.all([run('chromium'), run('firefox')]);
