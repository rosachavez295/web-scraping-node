import getBrowser from "./getBrowser.js";
import { baseUrl, credentials } from "./utils.js";

(async () => {
  const [page, browser] = await getBrowser();
  await page.goto(baseUrl);
  await page.screenshot({ path: "prueba.png" });
  await page.fill('input[id="username"]', credentials.username);
  await page.fill('input[id="password"]', credentials.password);
  await page.click('button[class="btn btn-primary login-btn"]');

  await page.screenshot({ path: "prueba1.png" });
  await delayTime(15);
  await page.context().storageState({ path: "credentials.json" });
  await page.screenshot({ path: "prueba2.png" });
  await delayTime(4);
  await page.click('button[class="btn search-btn"]');
  await delayTime(5);
  await page.screenshot({ path: "prueba4.png" });

  const tbody = await page.locator('div[class="table-body"]');
  const data = await tbody.evaluate((div) =>
    Array.from(div.querySelectorAll("span")).map((span) =>
      span.innerText.trim()
    )
  );
  console.log(data);

  await browser.close();
})();

function delayTime(second = 1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, second * 1000);
  });
}
