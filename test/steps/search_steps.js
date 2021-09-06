// const { Given, When, Then } = require("@cucumber/cucumber");
// const SearchForm = require("../../src/pages/seacrh");
// const SearchResult = require("../../src/pages/search.results");

// Given(/^I click on search input$/, async () => {
//   browser.url("https://www.21vek.by/");
//   await SearchForm.clickSearchInput();
// });
// Then(/^I assert that the image is present$/, async () => {
//   await expect(SearchResult.resultImg).toBeDisplayed();
// });

// Then(/^I assert that the price is present$/, async () => {
//   await expect(SearchResult.resultPrice).toBeDisplayed();
// });

// When(/^I type into search \"([^\"]*)\"$/, async (searchText) => {
//   await SearchForm.enterSearchText(searchText);
// });

// When(/^user click on X button$/, async () => {
//   await SearchForm.clickseacrhClearBtn();
// });

// Then(/^search input becomes empty$/, async () => {
//   await expect(SearchForm.searchInput).toHaveText("");
// });
// When(/^user press Enter button$/, async () => {
//   browser.keys("\uE007");
// });
// When(/^I click on icon magnifier$/, async () => {
//   await SearchForm.clickiconMagnifier();
// });
