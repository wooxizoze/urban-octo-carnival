const Page = require("./page");
const { click, setText } = require("../../src/utils/commands");

class LoginModal extends Page {
  // CSS selector for email login input
  get loginInput() {
    return $("input#login-email");
  }

  // CSS selector for password login input
  get passwordInput() {
    return $("input[label='Пароль']");
  }

  // CSS selector for submit button
  get submitBtn() {
    return $(".style_actions__2mIsz [type]");
  }
  // CSS selector for email error message
  get errorMessageEmail() {
    return $(
      ".style_inputComponent__2r2ew:nth-of-type(1) .input-error-message__message"
    );
  }
  // CSS selector for password error message
  get errorMessagePassword() {
    return $(
      ".style_inputComponent__2r2ew:nth-of-type(2) .input-error-message__message"
    );
  }
  // CSS locator for Forgot Password Link
  get resetPassword() {
    return $(".styles_bottomLinks__349w0 div:nth-of-type(1) button");
  }

  // Function that performs actions
  // Enter email to input
  async enterEmail(email) {
    await setText(this.loginInput, email);
  }

  // Enter Password To Input
  async enterPassword(password) {
    await setText(this.passwordInput, password);
  }

  // Click On Submit Button
  async clickOnSubmitBtn() {
    await click(this.submitBtn);
  }
  // Click On Reset Password Link
  async clickOnResetPassword() {
    await click(this.resetPassword);
  }
}

module.exports = new LoginModal();
