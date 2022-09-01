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
  //await page.locator('td[class="Wday"]').click();
  await page.click('input[class="Wdate ng-isolate-scope"]');
  await delayTime(4);

  // TODO: ADD Function getWeeks
  await getRow(page);

  //await page.locator(`text=${date}`).click();
  // await page.locator(".wday").locator("td");

  await page.screenshot({ path: "prueba3.png" });
  await delayTime(4);
  await page.screenshot({ path: "prueba4.png" });
  await browser.close();
})();

function delayTime(second = 1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, second * 1000);
  });
}

async function getRow(page) {
  const data = [];
  const allWeeks = await page.locator("tbody", (weeks) => {
    return weeks.map((week) => {
      const daysNum = [...Array(7).keys()].map((e) => e + 1);

      daysNum.forEach((num) => {
        data.push(week.querySelector(`td:nth-child(${num})`));
      });
    });
  });
  console.log(`${allWeeks.length} weeks found`);
  console.dir(allWeeks);
  console.dir(data);
  return [allWeeks];
}
