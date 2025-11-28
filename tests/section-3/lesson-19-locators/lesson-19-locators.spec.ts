import { expect, test } from "@playwright/test";

test("Primary Action is visible", async ({ page }) => {
  await page.goto("http://localhost:8080/section-3/lesson-19-locators/app.html");

  const primaryButton = page.getByRole("button", { name: "Primary Action" });
  await expect(primaryButton).toBeVisible();
});
