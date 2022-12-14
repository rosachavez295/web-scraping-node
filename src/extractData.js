import convertDataToText from "./convertDataToText.js";
import getBrowser from "./getBrowser.js";
import { credentials } from "./utils.js";

export default async function extractData(sucId, url) {
  const [page, browser] = await getBrowser();
  await page.goto(url);
  await page.fill('input[id="username"]', credentials.username);
  await page.fill('input[id="password"]', credentials.password);
  await page.click('button[class="btn btn-primary login-btn"]');
  await delayTime(15);
  await page.context().storageState({ path: "credentials.json" });
  await delayTime(4);
  await page.click('button[class="btn search-btn"]');
  await delayTime(5);
  const tbody = await page.locator('div[class="table-body"]');
  const data = await tbody.evaluate((div) =>
    Array.from(div.querySelectorAll("span")).map((span) =>
      span.innerText.trim()
    )
  );
  const result = await MockData(data);
  await convertDataToText(result, sucId);
  await browser.close();
  return true;
}

async function MockData(data) {
  const result = ["Hora;Contador"];
  data.forEach((item, index, arr) => {
    if (index % 2 === 0) {
      const counter = arr[index + 1];
      const hour = arr[index];
      const item = `${hour};${counter}`;
      result.push(item);
    }
  });
  return result.join("\n");
}

function delayTime(second = 1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, second * 1000);
  });
}
