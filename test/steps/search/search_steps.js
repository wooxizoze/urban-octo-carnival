const { Given, When, Then } = require("@cucumber/cucumber");
const SearchForm = require("../../../src/pages/seacrh");
const SearchResult = require("../../../src/pages/search.results");
const searchdata = require("../../resources/search_data.json");

Given(/^I click on search input$/, async () => {
  browser.url("https://www.21vek.by/");
  await SearchForm.clickSearchInput();
});

Then(/^I assert that there are only one match$/, async () => {
  await expect(SearchResult.searchCountMessage).toHaveText(
    "Наушники и гарнитуры (1)"
  );
  await expect(SearchResult.getSearchResultCount()).toBeElementsArrayOfSize(1);
});

Then(/^I assert that the name and price match$/, async () => {
  await expect(SearchResult.searchResultPrice).toHaveText(searchdata.price);
  await expect(SearchResult.searchResultName).toHaveText(searchdata.name);
});

Then(/^I assert that the image is present$/, async () => {
  await expect(SearchResult.searchResultImg).toBeDisplayed();
});

Then(/^I assert that the price is present$/, async () => {
  await expect(SearchResult.searchResultPrice).toBeDisplayed();
});

When(/^I type into search \"([^\"]*)\"$/, async (searchText) => {
  await SearchForm.enterSearchText(searchText);
});

When(/^user click on X button$/, async () => {
  await SearchForm.clickseacrhClearBtn();
});

Then(/^search input becomes empty$/, async () => {
  await expect(SearchForm.searchInput).toHaveText("");
});
When(/^user press Enter button$/, async () => {
  browser.keys("\uE007");
});
When(/^I click on icon magnifier$/, async () => {
  await SearchForm.clickiconMagnifier();
});
