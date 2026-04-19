import { expect, test } from "@playwright/test";

test("dashboard to blog detail journey works", async ({ page }) => {
  await page.goto("/dashboard");
  await page.getByRole("link", { name: "View all" }).first().waitFor();
  await page.locator('a[href^="/blog/"]').first().click();
  await expect(page).toHaveURL(/\/blog\/.+/);
  await expect(page.locator("main")).toBeVisible();
});

test("wallet bank transfer flow returns deterministic success state", async ({
  page,
}) => {
  await page.goto("/wallet");
  await page.getByRole("tab", { name: "Bank" }).click();
  await page.locator("#wallet-number").fill("02b-demo-wallet-001");
  await page.locator("#amount").fill("250");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.getByText("Congratulations!!")).toBeVisible();
});

test("settings save/cancel flow shows state feedback", async ({ page }) => {
  await page.goto("/settings");
  const firstName = page.locator("#firstName");
  await firstName.fill("Portfolio Tester");
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("Basic info saved.")).toBeVisible();

  await firstName.fill("Temporary Change");
  await page.getByRole("button", { name: "Cancel" }).click();
  await expect(page.getByText("Changes discarded.")).toBeVisible();
});
