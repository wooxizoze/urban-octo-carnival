import Page from "./page";

class LoginModal extends Page {
  get loginInput() {
    return $("input#login-email");
  }
  get passwordInput() {
    return $("///input[@label='Пароль']");
  }
  get submitBtn() {
    return $("///button[@innertext='Войти']");
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
}

export default new LoginModal();
