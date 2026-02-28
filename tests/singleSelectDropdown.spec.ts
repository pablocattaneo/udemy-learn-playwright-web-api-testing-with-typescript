import { test } from "@playwright/test";

const PAGE_URL = "https://testautomationpractice.blogspot.com/";

test("Single select dropdown actions", async ({ page }) => {
  await page.goto(PAGE_URL);
  const dropdown = page.getByRole("combobox").and(page.locator("#country"));
  await dropdown.selectOption("India");
});

test("Single select dropdown actions select by value", async ({ page }) => {
    await page.goto(PAGE_URL);
    const dropdown = page.getByRole("combobox").and(page.locator("#country"));
    await dropdown.selectOption({ value: "uk" });
});