// const { Given, When, Then } = require("@cucumber/cucumber");
// const AccountModal = require("../../../src/pages/account.modal");
// const loginModal = require("../../../src/pages/login.modal");
// const LoginModal = require("../../../src/pages/login.modal");

// Given(/^I on a main page and open login modal window$/, async () => {
//   await browser.url("https://www.21vek.by/");
//   await AccountModal.clickOnAccountBtn();
//   await AccountModal.loginBtn.waitForDisplayed({ timeout: 3000 });
//   await AccountModal.clickOnLoginBtn();
// });

// When(
//   /^I enter (.+) and (.+) and click submit button$/,
//   async (email, password) => {
//     await LoginModal.enterEmail(email);
//     await LoginModal.enterPassword(password);
//     await LoginModal.clickOnSubmitBtn();
//   }
// );

// Then(/^I should see account options with (.+)$/, async (email) => {
//   await AccountModal.clickOnAccountBtn();
//   await expect(AccountModal.getAccountInfo()).toBeExisting();
//   await expect(AccountModal.getAccountInfo()).toHaveText(email);
// });

// When(/^I click on close button$/, async () => {
//   await LoginModal.clickOnCloseBtn();
// });

// Then(/^modal window should close$/, async () => {
//   await expect(loginModal.loginModalWindow).toBeDisplayed();
// });
