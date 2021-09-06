const Page = require("./page");
const { click } = require("../../src/utils/commands");

class AccountModal extends Page {
  get accountBtn() {
    return $(".userToolsText");
  }
  get loginBtn() {
    return $(".userToolsBtn");
  }
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
