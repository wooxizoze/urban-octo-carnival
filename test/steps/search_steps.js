const { Given, When, Then } = require("@cucumber/cucumber");
const SearchForm = require("../../src/pages/seacrh");
const SearchResult = require("../../src/pages/search.results");

Given(/^I click on search input$/, async () => {
  browser.url("https://www.21vek.by/");
  await SearchForm.clickSearchInput();
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
