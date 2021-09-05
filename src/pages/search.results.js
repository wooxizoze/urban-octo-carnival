const Page = require("./page");
class SearchResults extends Page {
  get resultName() {
    return $(".result__name");
  }
  get resultPrice() {
    return $(".j-item-data-real5764204");
  }
  get resultImg() {
    return $(".result__img__inner img");
  }
  get resultCount() {
    return $(".b-content > span:nth-child(2)");
  }
}
module.exports = new SearchResults();
