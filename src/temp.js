import getBrowser from "./getBrowser.js";
import getPreviousDate from "./getPreviousDate.js";
import { baseUrl, credentials } from "./utils.js";

(async () => {
  const [page, browser] = await getBrowser();
  const date = getPreviousDate().split("-")[2];
  await page.goto(baseUrl);
  await page.screenshot({ path: "prueba.png" });
  await page.locator('input[class="Wdate ng-isolate-scope"]').click();
  await page.locator('td[class="Wday"]').click();
  //await page.click(`td:has-text('${date}')`);
  //await page.fill('input[class="Wdate ng-isolate-scope"]', getPreviousDate());
  await page.locator('class="btn search-btn"').click();

  //await page.fill('input[name="password"]', credentials.password);
  // await page.click('input[name="submit"]');

  //await page.locator('input[name="submit"]').click();
  await page.screenshot({ path: "prueba1.png" });
  //await page.context().storageState({ path: "credentials.json" });
  // const messages = [];
  //  page.on("console", (msg) => messages.push(`[${msg.type()}] ${msg.text()}`));

  await browser.close();
})();
