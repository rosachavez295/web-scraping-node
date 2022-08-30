const {chromium} = require('@playwright/test');
const url =('http://192.168.1.17/doc/page/login.asp?_1594146088492&page=application	');
let date = new Date();
let separator = "/"
let output =  date.getFullYear()+ separator + String(date.getMonth() + 1).padStart(2, '0') 


+ separator +String(date.getDate()-1).padStart(2, '0') ;
(async () =>{
    const browser= await chromium.launch();
    const context = await browser.newContext();

    const page = await context.NewPage();
    await page.goto(url);
    await page.fill('input[id="username"]','user');
    await page.fill('input[id="password"]','User123!');
    await page.locator('input[type="button"]');
    await page.click('button');



    await browser.close();
})
