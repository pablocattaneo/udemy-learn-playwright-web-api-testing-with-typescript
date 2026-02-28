import { expect, test } from "@playwright/test";
import { describe } from "node:test";

const PAGE_URL = "https://testautomationpractice.blogspot.com/";

test("Dropdown select dropdown actions", async ({ page }) => {
  await page.goto(PAGE_URL);
  const dropdown = page.getByRole("combobox").and(page.locator("#country"));
  await dropdown.selectOption("India");
});

test("Single select dropdown actions select by value", async ({ page }) => {
    await page.goto(PAGE_URL);
    const dropdown = page.getByRole("combobox").and(page.locator("#country"));
    await dropdown.selectOption({ value: "uk" });
});

test("Dropdown should have 10 options", async ({ page }) => {
    await page.goto(PAGE_URL);
    const dropdown = page.getByRole("combobox").and(page.locator("#country"));
    const options = await dropdown.locator("option").all();
    expect(options).toHaveLength(10);
    console.log("Number of options in dropdown: " + options.length);
});

test("Dropdown should be sorted in alphabetical order", async ({ page }) => {
    await page.goto(PAGE_URL);
    const dropdown = page.getByRole("combobox").and(page.locator("#country"));
    const options = await dropdown.locator("option").all();
    const optionValues = await Promise.all(options.map(option => option.textContent()));
    const sortedOptionValues = [...optionValues].sort();
    expect(optionValues).toEqual(sortedOptionValues);
});