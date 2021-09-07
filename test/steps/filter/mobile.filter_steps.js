const { Given, When, Then } = require("@cucumber/cucumber");
const FilterBar = require("../../../src/pages/filter.bar");
const FilterResults = require("../../../src/pages/filter.results");
const filterdatamobile = require("../../resources/filter_data_mobile.json");

Given(/^I am on mobile product page$/, async () => {
  await browser.url("https://www.21vek.by/mobile/");
});
When(
  /^I filter by parameters (.+) and (.+) and (.+) and (.+)$/,
  async (mobile_processor, diagonal, color, memory) => {
    await FilterBar.scrollToDiagonalSizeSection();
    await FilterBar.clickOnDiagonalSizeSection();
    await FilterBar.setDiagonalSize(diagonal);
    await FilterBar.scrollTomemorySectionSection();
    await FilterBar.openMemorySizeSection();
    await FilterBar.selectMemorySize(memory);
    await FilterBar.scrollToProcessorTypeSection();
    await FilterBar.openProcessorTypeSection();
    await FilterBar.selectProcessorType(mobile_processor);
    await FilterBar.scrollBodyColorSection();
    await FilterBar.openBodyColorSection();
    await FilterBar.selectBodyColor(color);
    await FilterBar.clickshowBtn();
  }
);

Then(/^I assert that there are only one match$/, async () => {
  await expect(FilterResults.getFilterResultCount()).toBeElementsArrayOfSize(1);
});

Then(/^I assert that the specified parameters match$/, async () => {
  await expect(FilterResults.filterResultItemName).toHaveText(
    filterdatamobile.name
  );
  await expect(FilterResults.filterMemorySize).toHaveText(
    filterdatamobile.memory_size
  );
  await expect(FilterResults.filterDisplaySize).toHaveText(
    filterdatamobile.display_size
  );
});

Then(/^I assert that the image is present$/, async () => {
  await expect(FilterResults.filterResultItemImg).toBeDisplayed();
});
