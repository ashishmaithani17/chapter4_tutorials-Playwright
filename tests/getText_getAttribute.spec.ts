import { test, expect } from '@playwright/test';

test('Get text and attribute using Playwright', async ({ page }) => {

    await page.goto('https://github.com/ashishmaithani17')


    // textContent() can retrieve the text content of the hidden elements, whereas innerText() cannot.
    // textContent() is aware of the styling and scripting of elements, but innerText() isn’t.


    // const name = await page.locator('[itemprop="name"]').textContent();

    const name = await page.locator('[itemprop="name"]').innerText();

    const finalName = name.trim();

    console.log("Name is :" + name);
    // console.log("Name is :" + finalName);

    // expect(finalName).toBe("ASHISH MAITHANI")


    const attributeValue = await page.getByTestId('repositories').first().getAttribute("href");
    console.log("Attribute value is :" + attributeValue);




}); 