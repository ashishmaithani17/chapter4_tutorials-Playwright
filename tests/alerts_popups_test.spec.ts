import { test, expect } from '@playwright/test';

test('Handle Alerts popup in playwright', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    // Alert

    page.once('dialog', dialog => {
        dialog.accept();
        console.log(`Alert Type is : ${dialog.type()}`);
        console.log(`Alert message is : ${dialog.message()}`);
    })
    await page.getByText('See an example alert', { exact: true }).click();


});


test('Handle Popup in playwright', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    // Conform Popup

    page.once('dialog', dialog => {
        dialog.accept();
        // dialog.dismiss();

        console.log(`Confirm message is : ${dialog.message()}`);
        console.log(`Confirm Popup Type is : ${dialog.type()}`);
    })
    await page.getByText('See a sample confirm', { exact: true }).click();


});

test('Handle Prompt in playwright', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    // Prompt Popup

    page.once('dialog', async (dialog) => {


        console.log(`Prompt message is : ${dialog.message()}`);
        console.log(`Prompt Popup Type is : ${dialog.type()}`);

        await dialog.accept("Tushar");
        // await dialog.dismiss();
    })
    await page.getByText('See a sample prompt', { exact: true }).click();


});