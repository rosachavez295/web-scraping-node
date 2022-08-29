const {chromium} = require('@playwright/test');
const url =('http://192.168.1.17/doc/page/login.asp?_1594146088492&page=application	');
(async () =>{
    const browser= await chromium.launch();
    const context = await browser.newContext();

    const page = await context.NewPage();
    await page.goto(url);
    await page.fill('input[id="username"]','user');
    await page.fill('input[id="password"]','User123!');
    await page.locator('input[type="button"]');


    await browser.close();
})
