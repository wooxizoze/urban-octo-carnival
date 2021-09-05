const { Given, When } = require("@cucumber/cucumber");

Given(/^I am on main page$/, async () => {
  await browser.url("https://www.21vek.by/");
});

When(/^I type into search \"([^\"]*)\"$/, async (text) => {
  const searchInput = await $("input#j-search");
  await searchInput.setValue(text);
});

When(/^I click on icon magnifier$/, async () => {
  const iconMagnifire = await $(".searchFieldSubmit");
  iconMagnifire.click();
});
