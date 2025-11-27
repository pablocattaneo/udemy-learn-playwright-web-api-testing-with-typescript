import {test, expect} from '@playwright/test';

test("verify page title", async ({page}) => {
  await page.goto('https://automationpractice.pl/index.php');
  let title = await page.title();
  console.log("Page Title is: " + title);
  await expect(page).toHaveTitle('My Shop');
});