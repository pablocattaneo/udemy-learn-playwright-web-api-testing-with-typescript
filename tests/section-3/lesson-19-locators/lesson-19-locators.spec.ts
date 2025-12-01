import { expect, test } from "@playwright/test";
import { describe } from "node:test";

const BASE_URL = "http://localhost:8080/section-3/lesson-19-locators/app.html";

// Lesson 19: Locators
describe("Lesson 19: Locators: Locate elements by their explicit or implicit ARIA roles.", () => {
  test("Primary Action is visible", async ({ page }) => {
    await page.goto(BASE_URL);

    const primaryButton = page.getByRole("button", { name: "Primary Action" });
    await expect(primaryButton).toBeVisible();
  });
  test("Username input is visible", async ({ page }) => {
    await page.goto(BASE_URL);

    const usernameInput = page.getByRole("textbox", { name: "Username" });
    await expect(usernameInput).toBeVisible();
  });
  test("checkbox   is visible", async ({ page }) => {
    await page.goto(BASE_URL);
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
    await page.goto(BASE_URL);

    const importantText = page.getByText(
      "This paragraph contains some important text that you might want to locate."
    );
    await expect(importantText).toBeVisible();
  });
  test("Special: Unique text identifier is visible", async ({ page }) => {
    await page.goto(BASE_URL);
    const uniqueText = page.getByText("Special: Unique text identifier");
    await expect(uniqueText).toBeVisible();
  });
  test("Click the button above to submit your information. is visible", async ({
    page,
  }) => {
    await page.goto(BASE_URL);
    const buttonInstructionText = page.getByText(
      "Click the button above to submit your information."
    );
    await expect(buttonInstructionText).toBeVisible();
  });
});

describe("Lesson 19: Locators: Locate form controls by their associated label text.", () => {
  test("Email Address: label is visible", async ({ page }) => {
    await page.goto(BASE_URL);

    const emailLabel = page.getByLabel("Email Address:");
    await expect(emailLabel).toBeVisible();
  });
  test("Password: label is visible", async ({ page }) => {
    await page.goto(BASE_URL);

    const passwordLabel = page.getByLabel("Password:");
    await expect(passwordLabel).toBeVisible();
  });
  test("Your Age: label is visible", async ({ page }) => {
    await page.goto(BASE_URL);
    const ageLabel = page.getByLabel("Your Age:");
    await expect(ageLabel).toBeVisible();
  });
  test("Standard: label is visible", async ({ page }) => {
    await page.goto(BASE_URL);
    const standardLabel = page.getByLabel("Standard");
    await expect(standardLabel).toBeVisible();
  });
  test(" Express: label is visible", async ({ page }) => {
    await page.goto(BASE_URL);
    const expressLabel = page.getByLabel("Express");
    await expect(expressLabel).toBeVisible();
  });
});

describe("Lesson 19: Locators: Locate input elements by their placeholder text", () => {
  test("Enter your full name placeholder is visible", async ({ page }) => {
    await page.goto(BASE_URL);

    const fullNamePlaceholder = page.getByPlaceholder("Enter your full name");
    await expect(fullNamePlaceholder).toBeVisible();
  });
  test(" Phone number (xxx-xxx-xxxx) placeholder is visible", async ({
    page,
  }) => {
    await page.goto(BASE_URL);

    const phonePlaceholder = page.getByPlaceholder(
      "Phone number (xxx-xxx-xxxx)"
    );
    await expect(phonePlaceholder).toBeVisible();
  });
  test("Type your message here... placeholder is visible", async ({ page }) => {
    await page.goto(BASE_URL);

    const messagePlaceholder = page.getByPlaceholder(
      "Type your message here..."
    );
    await expect(messagePlaceholder).toBeVisible();
  });
  test("Search products... placeholder is visible", async ({ page }) => {
    await page.goto(BASE_URL);
    const searchPlaceholder = page.getByPlaceholder("Search products...");
    await expect(searchPlaceholder).toBeVisible();
  });
});

describe("Lesson 19: Locators: Locate elements (usually images) by their alt text.", () => {
  test("Logo image with alt text logo image is visible", async ({ page }) => {
    await page.goto(BASE_URL);

    const logoImage = page.getByAltText("logo image");
    await expect(logoImage).toBeVisible();
  });
});

describe("Lesson 19: Locators: Locate elements by their title attribute.", () => {
  test("Element with title Home page link is visible", async ({ page }) => {
    await page.goto(BASE_URL);

    const htmlTitleElement = page.getByTitle("Home page link");
    await expect(htmlTitleElement).toBeVisible();
  });
  test(" Element with title HyperText Markup Language is visible", async ({
    page,
  }) => {
    await page.goto(BASE_URL);
    const htmlTitleElement = page.getByTitle("HyperText Markup Language");
    await expect(htmlTitleElement).toBeVisible();
  });
  test(" Element with title Tooltip text is visible", async ({ page }) => {
    await page.goto(BASE_URL);
    const tooltipTitleElement = page.getByTitle("Tooltip text");
    await expect(tooltipTitleElement).toBeVisible();
  });
});

describe("Lesson 19: Locators: Locate elements by their data-test-id attribute.", () => {
  test(" Element with data-test-id user-profile-card is visible", async ({
    page,
  }) => {
    await page.goto(BASE_URL);

    const userProfileCard = page.getByTestId("user-profile-card");
    await expect(userProfileCard).toBeVisible();
  });
  test(" Element with data-test-id profile-name is visible", async ({
    page,
  }) => {
    await page.goto(BASE_URL);
    const profileName = page.getByTestId("profile-name");
    await expect(profileName).toBeVisible();
  });
  test(" Element with data-test-id profile-email is visible", async ({
    page,
  }) => {
    await page.goto(BASE_URL);
    const profileEmail = page.getByTestId("profile-email");
    await expect(profileEmail).toBeVisible();
  });
  test(" Element with data-test-id edit-profile-btn is visible", async ({
    page,
  }) => {
    await page.goto(BASE_URL);
    const editProfileBtn = page.getByTestId("edit-profile-btn");
    await expect(editProfileBtn).toBeVisible();
  });
  test(" Element with data-test-id product-grid is visible", async ({
    page,
  }) => {
    await page.goto(BASE_URL);
    const productGrid = page.getByTestId("product-grid");
    await expect(productGrid).toBeVisible();
  });
});
