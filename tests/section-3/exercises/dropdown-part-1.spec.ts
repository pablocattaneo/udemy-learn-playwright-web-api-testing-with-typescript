import { test, expect } from "@playwright/test";

const PAGE_URL = "https://www.bstackdemo.com/";
const API_URL = "https://www.bstackdemo.com/api/products";

test("Verify the dropdown is displayed and enabled", async ({ page }) => {
  await page.goto(PAGE_URL);
  const dropdown = page.getByRole("combobox");
  await expect(dropdown).toBeVisible();
  await expect(dropdown).toBeEnabled();
});

test("Order By Lowest to Highest should sort items in descending order by price", async ({
  page,
}) => {
  await page.goto(PAGE_URL);
  const dropdown = page.getByRole("combobox");
  await dropdown.selectOption({ value: "lowestprice" });
  await page.waitForResponse((response) => {
    return (
      response.url().includes(API_URL) &&
      (response.status() === 200 || response.status() === 304)
    );
  });
  const prices = await page
    .locator(".shelf-container .shelf-item .shelf-item__price .val b")
    .allTextContents();
  const priceValues = prices;
  const sortedPriceValues = [...priceValues].sort((a, b) => a - b);
  expect(priceValues).toEqual(sortedPriceValues);
});
