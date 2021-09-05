import Page from "./page";

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
}

export default new AccountModal();
