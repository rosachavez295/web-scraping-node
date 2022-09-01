import getBrowser from "./getBrowser.js";
import getPreviousDate from "./getPreviousDate.js";
import { baseUrl, credentials } from "./utils.js";

(async () => {
  const [page, browser] = await getBrowser();
  const date = getPreviousDate().split("-")[2];
  await page.goto(baseUrl);
  await page.screenshot({ path: "prueba.png" });
  //await page.fill('input[class="Wdate ng-isolate-scope"]', getPreviousDate());

  await page.fill('input[id="username"]', credentials.username);
  await page.fill('input[id="password"]', credentials.password);
  await page.click('button[class="btn btn-primary login-btn"]');

  await page.screenshot({ path: "prueba1.png" });
  await delayTime(15);
  await page.context().storageState({ path: "credentials.json" });
  await page.screenshot({ path: "prueba2.png" });
  //await page.screenshot({ path: "prueba3.png" });
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

  // const allWeeks = await page.$$eval('div["class=table-body"]', (weeks) => {
  //   return weeks.map((week) => {
  //     const td1 = week.querySelector(`div:nth-child(1)`);
  //     return {
  //       td1: td1.innerText.trim(),
  //     };
  //   });
  // });
  // console.log(`${allWeeks.length} weeks found`);
  // console.dir(allWeeks);
  await browser.close();
})();

function delayTime(second = 1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, second * 1000);
  });
}
