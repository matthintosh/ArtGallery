import { test, expect } from "@playwright/test";
import { LOCAL_URL } from "./config";

test("Load homepage", async ({ page }) => {
  await page.goto(LOCAL_URL);

  await expect(page).toHaveTitle("Art Gallery");
  const collectionGrid = await page.getByTestId("collection-grid");
  await expect(collectionGrid).toBeVisible();

  const artCard = await page.getByTestId("image-card");
  expect(await artCard.count()).toEqual(20);
});

test("Load more button", async ({ page }) => {
  await page.goto(LOCAL_URL);

  const collectionGrid = await page.getByTestId("collection-grid");
  await expect(collectionGrid).toBeVisible();

  const artCardFirstPage = await page.getByTestId("image-card");
  expect(await artCardFirstPage.count()).toEqual(20);

  const requestForPageTwoPromise = page.waitForResponse((response) =>
    response.url().includes("p=2"),
  );
  await page.getByTestId("load-more-button").click();
  await requestForPageTwoPromise;

  await page.waitForTimeout(500);
  const artCardSecondPage = await page.getByTestId("image-card");
  expect(await artCardSecondPage.count()).toEqual(40);
});
