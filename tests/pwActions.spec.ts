import { test, expect } from "@playwright/test";
import { describe } from "node:test";

test(" Text input actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const textBox = page.getByRole("textbox").and(page.locator("#name"));
  await textBox.fill("Playwright");
  await expect(textBox).toHaveValue("Playwright");
});

describe("Radio buttons actions", () => {
  test("Radio button is visible", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const radioButton = page.getByRole("radio").and(page.locator("#male"));
    await expect(radioButton).toBeVisible();
  });
  test("Radio button is enabled", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const radioButton = page.getByRole("radio").and(page.locator("#male"));
    await expect(radioButton).toBeEnabled();
  });
  test("Radio button actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const radioButton = page.getByRole("radio").and(page.locator("#male"));
    await radioButton.check();
    await expect(radioButton).toBeChecked();
  });
});
