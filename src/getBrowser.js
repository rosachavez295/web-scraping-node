import { chromium } from "@playwright/test";
async function getBrowser() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  return [page, browser];
}
export default getBrowser;
