import { test, expect } from '@playwright/test';

test('Mutliple Browser / Page / Context in Playwright', async ({ page, browser }) => {
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

    // Create a  new browser context

    const contextNew = await browser.newContext();
    const pageNew = await contextNew.newPage();

    await pageNew.goto('https://ssr-auctionnation-dev-abepgxfcdkeghqgx.westus2-01.azurewebsites.net/');
    await pageNew.getByRole('button', { name: 'Login' }).click();
    await pageNew.getByRole('textbox', { name: 'Email*' }).click();
    await pageNew.getByRole('textbox', { name: 'Email*' }).fill('auction@yopmail.com');
    await pageNew.getByRole('textbox', { name: 'Email*' }).press('Tab');
    await pageNew.getByRole('textbox', { name: 'Enter Password' }).fill('Admin@123');
    // await page.getByRole('img').click();
    // await page.getByText('Don\'t have an account?').click();
    await pageNew.getByRole('button', { name: 'Login' }).click();
    // await page.getByRole('heading', { name: 'Auctions List' }).click();
    await expect(pageNew.locator('app-auction-list')).toContainText('Auctions List');

    // Additional assertions for robustness
    //   await expect(pageNew).toHaveURL('https://ssr-auctionnation-dev-abepgxfcdkeghqgx.westus2-01.azurewebsites.net/admin/auction-list');
    //   await expect(pageNew.getByRole('heading', { name: 'Auctions List' })).toBeVisible();
    //   await expect(pageNew.getByText('Auction Nation (10004)')).toBeVisible();
    //   await expect(pageNew.getByText('SuperAdmin')).toBeVisible();
    //   await expect(pageNew.getByRole('tab', { name: 'All Auctions' })).toBeVisible();

    const TabNew = await contextNew.newPage();

    await TabNew.goto('https://ssr-auctionnation-dev-abepgxfcdkeghqgx.westus2-01.azurewebsites.net/admin/auction-list');
    await expect(TabNew.getByRole('heading', { name: 'Auctions List' })).toBeVisible();


});