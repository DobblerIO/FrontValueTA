import { test, expect } from '@playwright/test';

test('favoriting', async ({ page }) => {

    await page.goto('http://localhost:5173/');

    await page.getByTestId('joke-list-item').first().waitFor();

    await page.getByTestId('favorite-control').first().click();
    await page.getByTestId('favorite-control').nth(2).click();
    await page.getByTestId('favorite-control').nth(3).click();
    page.getByTestId('nav-item-favorites').click();

    await expect(page.getByTestId('joke-list-item')).toHaveCount(3);

    page.getByTestId('favorite-control').first().click();
    await expect(page.getByTestId('joke-list-item')).toHaveCount(2);

});
