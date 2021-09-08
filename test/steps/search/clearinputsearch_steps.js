const { Given, When, Then } = require("@cucumber/cucumber");
const SearchForm = require("../../../src/pages/seacrh");

Given(/^I activate search input$/, async () => {
  browser.url("https://www.21vek.by/");
  await SearchForm.clickSearchInput();
});

When(/^I type text into search \"([^\"]*)\"$/, async (searchText) => {
  await SearchForm.enterSearchText(searchText);
});

When(/^user click close button$/, async () => {
  await SearchForm.clickseacrhClearBtn();
});

Then(/^the input field is cleared$/, async () => {
  await expect(SearchForm.searchInput).toHaveText("");
});
