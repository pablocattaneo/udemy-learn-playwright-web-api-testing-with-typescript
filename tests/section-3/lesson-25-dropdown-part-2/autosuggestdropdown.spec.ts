import { test, expect } from "@playwright/test";

const PAGE_URL = "https://www.flipkart.com/";

test("Verify the search input is displayed and enabled", async ({ page }) => {
  await page.goto(PAGE_URL);
  const searchInput = await page.locator('form input[name="q"]');
  console.log('searchInput', searchInput)
  await expect(searchInput).toBeVisible();
});
