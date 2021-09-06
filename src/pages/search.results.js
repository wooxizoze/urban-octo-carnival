const Page = require("./page");
class SearchResults extends Page {
  get searchResultName() {
    return $(".result__name");
  }

  get searchResultPrice() {
    return $(".j-item-data-real5764204");
  }

  get searchResultImg() {
    return $(".result__img__inner img");
  }

  get searchCountMessage() {
    return $(".b-recipes__item__link.j-category__link");
  }

  get searchResultCount() {
    return $$(".b-result__inner > li:not(:empty)");
  }

  getSearchResultCount() {
    return this.searchResultCount;
  }
}
module.exports = new SearchResults();
