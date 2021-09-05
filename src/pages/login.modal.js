const Page = require("./page");

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
  get forgotPasswordBtn() {
    return $("///button[@innertext='Не помню пароль']");
  }
  get signupLink() {
    return $('///button[@innertext="Регистрация"]');
  }
  get closeLoginModalBtn() {
    return $(".styles_closeModalIcon__2c-f9");
  }
  get errorMessage() {
    return $(".input-error-message__message span");
  }
}

module.exports = new LoginModal();
