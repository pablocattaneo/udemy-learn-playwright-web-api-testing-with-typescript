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
  test("Special: Unique text identifier is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );
    const uniqueText = page.getByText("Special: Unique text identifier");
    await expect(uniqueText).toBeVisible();
  });
  test("Click the button above to submit your information. is visible", async ({
    page,
  }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );
    const buttonInstructionText = page.getByText(
      "Click the button above to submit your information."
    );
    await expect(buttonInstructionText).toBeVisible();
  });
});

describe("Lesson 19: Locators: Locate form controls by their associated label text.", () => {
  test("Email Address: label is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );

    const emailLabel = page.getByLabel("Email Address:");
    await expect(emailLabel).toBeVisible();
  });
  test("Password: label is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );

    const passwordLabel = page.getByLabel("Password:");
    await expect(passwordLabel).toBeVisible();
  });
  test("Your Age: label is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );
    const ageLabel = page.getByLabel("Your Age:");
    await expect(ageLabel).toBeVisible();
  });
  test("Standard: label is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );
    const standardLabel = page.getByLabel("Standard");
    await expect(standardLabel).toBeVisible();
  });
  test(" Express: label is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );
    const expressLabel = page.getByLabel("Express");
    await expect(expressLabel).toBeVisible();
  });
});

describe("Lesson 19: Locators: Locate input elements by their placeholder text", () => {
  test("Enter your full name placeholder is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );

    const fullNamePlaceholder = page.getByPlaceholder("Enter your full name");
    await expect(fullNamePlaceholder).toBeVisible();
  });
  test(" Phone number (xxx-xxx-xxxx) placeholder is visible", async ({
    page,
  }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );

    const phonePlaceholder = page.getByPlaceholder(
      "Phone number (xxx-xxx-xxxx)"
    );
    await expect(phonePlaceholder).toBeVisible();
  });
  test("Type your message here... placeholder is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );

    const messagePlaceholder = page.getByPlaceholder(
      "Type your message here..."
    );
    await expect(messagePlaceholder).toBeVisible();
  });
  test("Search products... placeholder is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );
    const searchPlaceholder = page.getByPlaceholder("Search products...");
    await expect(searchPlaceholder).toBeVisible();
  });
});

describe("Lesson 19: Locators: Locate elements (usually images) by their alt text.", () => {
  test("Logo image with alt text logo image is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );

    const logoImage = page.getByAltText("logo image");
    await expect(logoImage).toBeVisible();
  });
});

describe("Lesson 19: Locators: Locate elements by their title attribute.", () => {
  test("Element with title Home page link is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );

    const  htmlTitleElement = page.getByTitle("Home page link");
    await expect(htmlTitleElement).toBeVisible();
  });
  test(" Element with title HyperText Markup Language is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );
    const htmlTitleElement = page.getByTitle("HyperText Markup Language");
    await expect(htmlTitleElement).toBeVisible();
  });
  test(" Element with title Tooltip text is visible", async ({ page }) => {
    await page.goto(
      "http://localhost:8080/section-3/lesson-19-locators/app.html"
    );
    const tooltipTitleElement = page.getByTitle("Tooltip text");
    await expect(tooltipTitleElement).toBeVisible();
  });
});