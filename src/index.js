import { chromium } from "@playwright/test";
const url= "http://127.0.0.1:5500/public/index.html";
(async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto(url)
  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'admin');
 // await page.click('input[name="submit"]');
  await page.screenshot({ path: "prueba.png" });
  await page.locator('input[name="submit"]').click();
  await page.screenshot({ path: "prueba1.png" });
  await page.context().storageState({path: "credentials.json"});
  const messages = [];
  page.on('console', msg => messages.push(`[${msg.type()}] ${msg.text()}`));

  await browser.close();
})();

