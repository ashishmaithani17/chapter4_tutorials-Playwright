import { test, expect } from '@playwright/test';

test('test 1 right', async ({ page}) => {
    await page.goto('https://ssr-auctionnation-dev-abepgxfcdkeghqgx.westus2-01.azurewebsites.net/');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Email*' }).click();
    await page.getByRole('textbox', { name: 'Email*' }).fill('auction@yopmail.com');
    await page.getByRole('textbox', { name: 'Email*' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Admin@123');
    // await page.getByRole('img').click();
    // await page.getByText('Don\'t have an account?').click();
    await page.getByRole('button', { name: 'Login' }).click();
    // await page.getByRole('heading', { name: 'Auctions List' }).click();
    await expect(page.locator('app-auction-list')).toContainText('Auctions List');

    // Additional assertions for robustness
    await expect(page).toHaveURL('https://ssr-auctionnation-dev-abepgxfcdkeghqgx.westus2-01.azurewebsites.net/admin/auction-list');
    await expect(page.getByRole('heading', { name: 'Auctions List' })).toBeVisible();
    await expect(page.getByText('Auction Nation (10004)')).toBeVisible();
    await expect(page.getByText('SuperAdmin')).toBeVisible();
    await expect(page.getByRole('tab', { name: 'All Auctions' })).toBeVisible();


});

test('test 2 fail', async ({ page }) => {
   expect(true).toBe(false);
});

test('test 3 fail', async ({ page }) => {
   expect(true).toBe(false);
});