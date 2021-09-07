const Page = require("./page");
class FilterResults extends Page {
  get filterResultItemImg() {
    return $(".result__img img");
  }

  get filterResultItemName() {
    return $(".j-ga_track.result__link > .result__name");
  }
}

module.exports = new FilterResults();
