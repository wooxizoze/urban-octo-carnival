const Page = require("./page");
class FilterResults extends Page {
  // CSS locators filter page results
  // CSS locators of the product image found as a result of filtering
  get filterResultItemImg() {
    return $(".result__img img");
  }
  // CSS locators of the product name found as a result of filtering
  get filterResultItemName() {
    return $(".j-ga_track.result__link > .result__name");
  }
  // CSS locators of the product price found as a result of filtering
  get filterResultPrice() {
    return $(
      "#j-result-page-1 .catalog-result__item_tools .g-item-data.j-item-data"
    );
  }
  // CSS locators for the number of products found as a result of filtration

  get filterResultCount() {
    return $$("ul#j-result-page-1 li");
  }

  // CSS locators of the processor name found as a result of filtering
  get filterResultProcessorName() {
    return $("tr:nth-of-type(4) > .result__attr_val");
  }
  // CSS locators of the videocard name found as a result of filtering
  get filterResultVideoCardName() {
    return $("tbody tr:nth-of-type(8) .result__attr_val");
  }
  // CCS locator for memory size as a result of filtering
  get filterMemorySize() {
    return $("tbody tr:nth-of-type(4) .result__attr_val");
  }
  // CCS locator for display size as a result of filtering
  get filterDisplaySize() {
    return $("tbody tr:nth-of-type(2) .result__attr_val");
  }
  // Funtion that return number of product found as a result of filtration
  getFilterResultCount() {
    return this.filterResultCount;
  }
}

module.exports = new FilterResults();
