require('dotenv').config();
const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber')
const { chromium } = require('@playwright/test')
setDefaultTimeout(60000);
Before(async function () {
    this.browser = await chromium.launch({headless: true});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function () {
    if(scenario.result.status === 'FAILED')
    {
        const screenshot = await this.page.screenshot({fullPage: true});
        this.attach(screenshot, 'image/png');
    }
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});