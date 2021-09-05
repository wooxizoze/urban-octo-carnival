const Page = require("./page");
const { click, setText } = require("../../src/utils/commands");

class SearchForm extends Page {
  get searchInput() {
    return $("input#j-search");
  }
  get iconMagnifier() {
    return $(".searchFieldSubmit");
  }
  get seacrhClearBtn() {
    return $(".searchFieldClear");
  }
  async clickSearchInput() {
    await click(this.searchInput);
  }
  async enterSearchText(searchText) {
    await setText(this.searchInput, searchText);
  }
  async clickseacrhClearBtn() {
    await click(this.seacrhClearBtn);
  }
}

module.exports = new SearchForm();
