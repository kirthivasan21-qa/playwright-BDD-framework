const { LoginPage } = require('../pages/loginPage.js');
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is in OrangeHRM login page', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goto();
});

When('I enter username {string} and password {string}', async function (username, password) {
    await this.loginPage.login(username, password);
});

Then('the dashboard is visible', async function () {
    const dashboardHeader = this.page.locator('h6.oxd-text--h6');
    await expect(dashboardHeader).toHaveText('Dashboard');
});