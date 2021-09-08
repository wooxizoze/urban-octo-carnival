const { Given, When, Then } = require("@cucumber/cucumber");
const AccountModal = require("../../../src/pages/account.modal");
const LoginModal = require("../../../src/pages/login.modal");

Given(/^I on a main page and open login modal window$/, async () => {
  await browser.url("https://www.21vek.by/");
  await AccountModal.clickOnAccountBtn();
  await AccountModal.loginBtn.waitForDisplayed({ timeout: 3000 });
  await AccountModal.clickOnLoginBtn();
});

When(/^I click submit button with empty fields$/, async () => {
  await LoginModal.clickOnSubmitBtn();
});

Then(/^I should see error messages for empty email and password$/, async () => {
  await expect(LoginModal.errorMessageEmail).toHaveText(
    "Электронная почта не указана"
  );
  await expect(LoginModal.errorMessagePassword).toHaveText("Пароль не указан");
});
