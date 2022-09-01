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
})();class="WdayTable"
<table class="WdayTable" width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr class="MTitle" align="center"><td class="WdayTableWeek">Sun</td><td class="WdayTableWeek">Mon</td><td class="WdayTableWeek">Tue</td><td class="WdayTableWeek">Wed</td><td class="WdayTableWeek">Thu</td><td class="WdayTableWeek">Fri</td><td class="WdayTableWeek">Sat</td></tr><tr><td onclick="day_Click(2022,7,31);" onmouseover="this.className='WotherDayOn'" onmouseout="this.className='WotherDay'" class="WotherDay">31</td><td onclick="day_Click(2022,8,1);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">1</td><td onclick="day_Click(2022,8,2);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">2</td><td onclick="day_Click(2022,8,3);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">3</td><td onclick="day_Click(2022,8,4);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">4</td><td onclick="day_Click(2022,8,5);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">5</td><td onclick="day_Click(2022,8,6);" onmouseover="this.className='WwdayOn'" onmouseout="this.className='Wwday'" class="Wwday">6</td></tr><tr><td onclick="day_Click(2022,8,7);" onmouseover="this.className='WwdayOn'" onmouseout="this.className='Wwday'" class="Wwday">7</td><td onclick="day_Click(2022,8,8);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">8</td><td onclick="day_Click(2022,8,9);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">9</td><td onclick="day_Click(2022,8,10);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">10</td><td onclick="day_Click(2022,8,11);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">11</td><td onclick="day_Click(2022,8,12);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">12</td><td onclick="day_Click(2022,8,13);" onmouseover="this.className='WwdayOn'" onmouseout="this.className='Wwday'" class="Wwday">13</td></tr><tr><td onclick="day_Click(2022,8,14);" onmouseover="this.className='WwdayOn'" onmouseout="this.className='Wwday'" class="Wwday">14</td><td onclick="day_Click(2022,8,15);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">15</td><td onclick="day_Click(2022,8,16);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">16</td><td onclick="day_Click(2022,8,17);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">17</td><td onclick="day_Click(2022,8,18);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">18</td><td onclick="day_Click(2022,8,19);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">19</td><td onclick="day_Click(2022,8,20);" onmouseover="this.className='WwdayOn'" onmouseout="this.className='Wwday'" class="Wwday">20</td></tr><tr><td onclick="day_Click(2022,8,21);" onmouseover="this.className='WwdayOn'" onmouseout="this.className='Wwday'" class="Wwday">21</td><td onclick="day_Click(2022,8,22);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">22</td><td onclick="day_Click(2022,8,23);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">23</td><td onclick="day_Click(2022,8,24);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">24</td><td onclick="day_Click(2022,8,25);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">25</td><td onclick="day_Click(2022,8,26);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">26</td><td onclick="day_Click(2022,8,27);" onmouseover="this.className='WwdayOn'" onmouseout="this.className='Wwday'" class="Wwday">27</td></tr><tr><td onclick="day_Click(2022,8,28);" onmouseover="this.className='WwdayOn'" onmouseout="this.className='Wwday'" class="Wwday">28</td><td onclick="day_Click(2022,8,29);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wselday'" class="Wselday">29</td><td onclick="day_Click(2022,8,30);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wday'" class="Wday">30</td><td onclick="day_Click(2022,8,31);" onmouseover="this.className='WdayOn'" onmouseout="this.className='Wtoday'" class="Wtoday">31</td><td onclick="day_Click(2022,9,1);" onmouseover="this.className='WotherDayOn'" onmouseout="this.className='WotherDay'" class="WotherDay">1</td><td onclick="day_Click(2022,9,2);" onmouseover="this.className='WotherDayOn'" onmouseout="this.className='WotherDay'" class="WotherDay">2</td><td onclick="day_Click(2022,9,3);" onmouseover="this.className='WotherDayOn'" onmouseout="this.className='WotherDay'" class="WotherDay">3</td></tr><tr><td onclick="day_Click(2022,9,4);" onmouseover="this.className='WotherDayOn'" onmouseout="this.className='WotherDay'" class="WotherDay">4</td><td onclick="day_Click(2022,9,5);" onmouseover="this.className='WotherDayOn'" onmouseout="this.className='WotherDay'" class="WotherDay">5</td><td onclick="day_Click(2022,9,6);" onmouseover="this.className='WotherDayOn'" onmouseout="this.className='WotherDay'" class="WotherDay">6</td><td onclick="day_Click(2022,9,7);" onmouseover="this.className='WotherDayOn'" onmouseout="this.className='WotherDay'" class="WotherDay">7</td><td onclick="day_Click(2022,9,8);" onmouseover="this.className='WotherDayOn'" onmouseout="this.className='WotherDay'" class="WotherDay">8</td><td onclick="day_Click(2022,9,9);" onmouseover="this.className='WotherDayOn'" onmouseout="this.className='WotherDay'" class="WotherDay">9</td><td onclick="day_Click(2022,9,10);" onmouseover="this.className='WotherDayOn'" onmouseout="this.className='WotherDay'" class="WotherDay">10</td></tr></tbody></table>



// async function getRow(page) {
//   const data = [];
//   const allWeeks = await page.$$eval("tbody", (weeks) => {
//     return weeks.map((week) => {
//       const daysNum = [...Array(7).keys()].map((e) => e + 1);

//       daysNum.forEach((num) => {
//         data.push(week.querySelector(`td:nth-child(${num})`).innerText.trim());
//       });
//     });
//   });
//   console.log(`${allWeeks.length} weeks found`);
//   console.dir(allWeeks);
//   console.dir(data);
//   return [allWeeks];
// }

  // TODO: ADD Function getWeeks

  // const allWeeks = await page.$$eval("iframe", (weeks) => {
  //   return weeks.map((week) => {
  //     const td1 = week.querySelector(`td:nth-child(1)`);
  //     return {
  //       td1: td1.innerText.trim(),
  //     };
  //   });
  // });
  // console.log(`${allWeeks.length} weeks found`);
  // console.dir(allWeeks);

  //const rowTexts = await row.locator(':scope').allInnerTexts()
  //await rowTexts.forEach((text) => {
  //  console.log(text)
  //})

  //await page.locator(`text=${date}`).click();
  // await page.locator(".wday").locator("td");

  // TODO: ADD Function getWeeks https://javadoc.io/static/com.microsoft.playwright/playwright/0.180.0/com/microsoft/playwright/ElementHandle.html

  // const allWeeks = await page.$$eval("iframe", (weeks) => {
  //   return weeks.map((week) => {
  //     const td1 = week.querySelector(`td:nth-child(1)`);
  //     return {
  //       td1: td1.innerText.trim(),
  //     };
  //   });
  // });
  // console.log(`${allWeeks.length} weeks found`);
  // console.dir(allWeeks);

  //const rowTexts = await row.locator(':scope').allInnerTexts()
  //await rowTexts.forEach((text) => {
  //  console.log(text)
  //})

  //await page.locator(`text=${date}`).click();
  // await page.locator(".wday").locator("td");
