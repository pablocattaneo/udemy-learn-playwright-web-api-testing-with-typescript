import { expect, test } from "@playwright/test";
import { describe } from "node:test";

// Lesson 19: Locators
describe("Lesson 19: Locators: Locate elements by their explicit or implicit ARIA roles.", () => {
  test("Primary Action is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );

    const primaryButton = page.getByRole("button", { name: "Primary Action" });
    await expect(primaryButton).toBeVisible();
  });
  test("Username input is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );

    const usernameInput = page.getByRole("textbox", { name: "Username" });
    await expect(usernameInput).toBeVisible();
  });
  test("checkbox   is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );
    const rememberMeCheckbox = page.getByRole("checkbox", {
      name: " Accept terms",
    });
    await expect(rememberMeCheckbox).toBeVisible();
  });
});

describe("Lesson 19: Locators: Locate elements by their text content.", () => {
  test("This paragraph contains some important text that you might want to locate. is visible", async ({
    page,
  }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );

    const importantText = page.getByText(
      "This paragraph contains some important text that you might want to locate."
    );
    await expect(importantText).toBeVisible();
  });
});
