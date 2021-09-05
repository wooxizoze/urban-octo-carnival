import Page from "./page";

class SearchInput extends Page {
  get searchInput() {
    return $("input#j-search");
  }
  get iconMagnifier() {
    return $(".searchFieldSubmit");
  }
}

export default new SearchInput();
