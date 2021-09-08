const { Given, When, Then } = require("@cucumber/cucumber");
const AccountModal = require("../../../src/pages/account.modal");
const LoginModal = require("../../../src/pages/login.modal");
const ResetPasswordModal = require("../../../src/pages/resetpassword.modal");

Given(/^I open login modal$/, async () => {
  await browser.url("https://www.21vek.by/");
  await AccountModal.clickOnAccountBtn();
  await AccountModal.loginBtn.waitForDisplayed({ timeout: 3000 });
  await AccountModal.clickOnLoginBtn();
});

When(/^I click on forget password link$/, async () => {
  await LoginModal.clickOnResetPassword();
});

Then(/^Reset password modal window opens$/, async () => {
  await expect(ResetPasswordModal.resetPasswordHeadline).toHaveText(
    "Сброс пароля"
  );
});
