const Page = require("./page");
const { click } = require("../../src/utils/commands");

class AccountModal extends Page {
  // CSS locators for Account modal window
  // CCS locator for account button
  get accountBtn() {
    return $(".userToolsText");
  }
  // CCS locator for login button
  get loginBtn() {
    return $(".userToolsBtn");
  }
  // CCS locator for logout button
  get logoutBtn() {
    return $(".ProfileItem_itemLogout__1XgF8");
  }
  // СSS locator for account info (should have )
  get accountInfo() {
    return $(".userToolsSubtitle");
  }

  // Functions for Account Modal
  getAccountInfo() {
    return this.accountInfo;
  }
  // Function that click on Account button
  async clickOnAccountBtn() {
    await click(this.accountBtn);
  }
  // Function that click on Login button
  async clickOnLoginBtn() {
    await click(this.loginBtn);
  }
  // Function that click on Logout button
  async clickOnLogoutBtn() {
    await click(this.logoutBtn);
  }
}

module.exports = new AccountModal();
