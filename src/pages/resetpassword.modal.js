const Page = require("./page");
const { click, setText } = require("../utils/commands");

class ResetPasswordModal extends Page {
  //CSS selecotr for Reset Password Headline
  get resetPasswordHeadline() {
    return $(".style_formTitle__hRNRz");
  }
  // CSS locator for Reset Password Input
  get resetPasswordInput() {
    return "input#reset-password-email";
  }
  // CSS locator for Reset Password submit Button
  get resetPasswordSubmitBtn() {
    return $(".style_actions__2mIsz [type]");
  }
  // CSS selector for Reset password error message
  get ressetPasswordErrorMessage() {
    return ".input-error-message__message";
  }
  // Function for Reset Password Modal Window
  // Enter Email to Reset Password Input
  async enterEmail(email) {
    await setText(this.resetPasswordInput, email);
  }
  // Click On Reset Password Submit Button
  async clickOnResetPasswordSubmitBtn() {
    await click(this.resetPasswordSubmitBtn);
  }
}

module.exports = new ResetPasswordModal();
