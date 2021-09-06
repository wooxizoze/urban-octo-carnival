const Page = require("./page");
const { click, setText } = require("../../src/utils/commands");

class LoginModal extends Page {
  get loginInput() {
    return $("input#login-email");
  }
  get passwordInput() {
    return $("input[label='Пароль']");
  }
  get submitBtn() {
    return $(".style_actions__2mIsz [type]");
  }
  get closeLoginModalBtn() {
    return $(".styles_closeModalIcon__2c-f9");
  }
  get errorMessage() {
    return $(".input-error-message__message span");
  }
  async clickOnSubmitBtn() {
    await click(this.submitBtn);
  }
  async enterEmail(email) {
    await setText(this.loginInput, email);
  }
  async enterPassword(password) {
    await setText(this.passwordInput, password);
  }
}

module.exports = new LoginModal();
