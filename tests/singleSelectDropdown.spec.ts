import { expect, test } from "@playwright/test";
import { describe } from "node:test";

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

test("Counting the number of options in dropdown", async ({ page }) => {
    await page.goto(PAGE_URL);
    const dropdown = page.getByRole("combobox").and(page.locator("#country"));
    const options = await dropdown.locator("option").all();
    expect(options).toHaveLength(10);
    console.log("Number of options in dropdown: " + options.length);
});