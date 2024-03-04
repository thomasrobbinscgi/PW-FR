
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the login page', async function () {
  await page.goto('https://yourapp.com/login');
});

When('I enter valid credentials', async function () {
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'testpass');
  await page.click('#submit');
});

Then('I should be redirected to the dashboard', async function () {
  await expect(page.url()).toBe('https://yourapp.com/dashboard');
});
