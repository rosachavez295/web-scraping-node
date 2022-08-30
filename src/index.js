import getBrowser from "./getBrowser";
import getPreviousDate from "./getPreviousDate";
import { baseUrl, credentials } from "./utils";

(async () => {
  const [page, browser] = await getBrowser();

  await page.goto(baseUrl);
  await page.screenshot({ path: "prueba.png" });
  await page.fill('input[class="Wdate ng-isolate-scope"]', getPreviousDate());

  //await page.fill('input[name="password"]', credentials.password);
  // await page.click('input[name="submit"]');

  //await page.locator('input[name="submit"]').click();
  await page.screenshot({ path: "prueba1.png" });
  //await page.context().storageState({ path: "credentials.json" });
  // const messages = [];
  //  page.on("console", (msg) => messages.push(`[${msg.type()}] ${msg.text()}`));

  await browser.close();
})();
