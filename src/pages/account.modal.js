const Page = require("./page");

class AccountModal extends Page {
  get accountBtn() {
    return $(".userToolsText");
  }
  get loginBtn() {
    return $(".userToolsBtn");
  }
  get basketBtn() {
    return $("//a[@pathname='/order/']/div[@innertext='Корзина']");
  }
  get featuredProductsBtn() {
    return $("//a[@pathname=" / aside / ']/div[@innertext="Избранные товары"]');
  }
  get viewItemsBtn() {
    return $("//a[@pathname=" / viewed / ']/div[@innertext="Просмотренные"]');
  }
  get compareListBtn() {
    return $(
      "//a[@pathname=" / compare / ']/div[@innertext="Списки сравнения"]'
    );
  }
  get logoutBtn() {
    return $(".ProfileItem_itemLogout__1XgF8 .ProfileItem_itemText__Qz7I0");
  }
  get accountInfo() {
    return $(".userToolsSubtitle");
  }
  getAccountInfo() {
    return this.accountInfo;
  }
}

module.exports = new AccountModal();
