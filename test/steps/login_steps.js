const { Given, When, Then } = require("@cucumber/cucumber");
const AccountModal = require("../../src/pages/account.modal");
const LoginModal = require("../../src/pages/login.modal");

Given(/^I on a main page and open login modal window$/, async () => {
  await browser.url("https://www.21vek.by/");
  await AccountModal.accountBtn.click();
  await AccountModal.loginBtn.waitForDisplayed({ timeout: 3000 });
  await AccountModal.loginBtn.click();
});

When(
  /^I enter (.+) and (.+) and click submit button$/,
  async (email, password) => {
    await LoginModal.loginInput.setValue(email);
    await LoginModal.passwordInput.setValue(password);
    await LoginModal.submitBtn.click;
  }
);

Then(/^I should see account options with (.+)$/, async (email) => {
  console.log(email);
  await expect(AccountModal.accountInfo.toHaveText(email));
});
