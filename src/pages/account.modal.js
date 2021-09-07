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

  get accountInfo() {
    return $(".userToolsSubtitle");
  }

  getAccountInfo() {
    return this.accountInfo;
  }

  async clickOnAccountBtn() {
    await click(this.accountBtn);
  }

  async clickOnLoginBtn() {
    await click(this.loginBtn);
  }

  async clickOnLogoutBtn() {
    await click(this.logoutBtn);
  }
}

module.exports = new AccountModal();
