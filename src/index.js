import getBrowser from "./getBrowser.js";
import getPreviousDate from "./getPreviousDate.js";
import { baseUrl, credentials } from "./utils.js";

(async () => {
  const [page, browser] = await getBrowser();

  await page.goto(baseUrl);
  await page.screenshot({ path: "prueba.png" });
  //await page.fill('input[class="Wdate ng-isolate-scope"]', getPreviousDate());

  await page.fill('input[id="username"]', credentials.username);
  await page.fill('input[id="password"]', credentials.password);
  await page.click('button[class="btn btn-primary login-btn"]');
  //await page.fill('input[name="password"]', credentials.password);
  // await page.click('input[name="submit"]');

  //await page.locator('input[name="submit"]').click();
  await page.screenshot({ path: "prueba1.png" });

  await page.context().storageState({ path: "credentials.json" });
  await page.screenshot({ path: "prueba2.png" });
  // const messages = [];
  //  page.on("console", (msg) => messages.push(`[${msg.type()}] ${msg.text()}`));
  //await page.locator().
  await browser.close();
})();
