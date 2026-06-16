import { test, expect } from '@playwright/test';

test('Iterate matching elements', async ({ page }) => {

    // Iterate matching elements using forEach()
    await page.goto('https://github.com/ashishmaithani17')

    const repo_links = await page.$$('.repo');
    // For Of loop
    for await (const repo_link of repo_links) {
        const text = await repo_link.textContent()
        console.log("Repo link from 1st Loop is :" + text);
    }

    console.log("----------------------------------------------------------------")

    // For Loop
    for (let i = 0; i < repo_links.length; i++) {
        const text = await repo_links[i].textContent()
        console.log("Repo link from 2nd Loop is :" + text);
    }
    console.log("----------------------------------------------------------------")

    const repo_links2 = await page.$$('.repo');
    const count = repo_links2.length;

    console.log("Count is :" + count);

    for (let i = 0; i < count; i++) {
        const text = await repo_links2[i].textContent();
        console.log("Repo link from 3rd Loop is :" + text);
    }
});     