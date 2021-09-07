const { Given, When, Then } = require("@cucumber/cucumber");
const FilterBar = require("../../src/pages/filter.bar");
const FilterResults = require("../../src/pages/filter_results");
const filterdatalaptop = require("../../test/resources/filter_data_laptops.json");
const filterdatamobile = require("../../test/resources/filter_data_mobile.json");

Given(/^I am on notebooks product page$/, async () => {
  await browser.url("https://www.21vek.by/notebooks/");
});

When(
  /^I filter by (.+) and (.+) and (.+) and (.+)$/,
  async (status, brand, videocard, processor) => {
    await FilterBar.selectProductStatus(status);
    await FilterBar.scrollToBrandSection();
    await FilterBar.selectProductBrand(brand);

    await FilterBar.scrollToVideoCardSection();
    await FilterBar.clickOnvideocardLink();
    await FilterBar.selectProductVidocard(videocard);

    await FilterBar.scrollToProcessorSection();
    await FilterBar.clickOnprocessorLink();
    await FilterBar.selectProductProcessor(processor);
    await FilterBar.clickshowBtn();
  }
);

Then(/^I assert that there are only one match$/, async () => {
  await expect(FilterResults.getFilterResultCount()).toBeElementsArrayOfSize(1);
});

Then(/^I assert that the specified parameters match$/, async () => {
  await expect(FilterResults.filterResultItemName).toHaveText(
    filterdatalaptop.name
  );
  await expect(FilterResults.filterResultPrice).toHaveText(
    filterdatalaptop.price
  );
  await expect(FilterResults.filterResultProcessorName).toHaveText(
    filterdatalaptop.processor
  );
  await expect(FilterResults.filterResultVideoCardName).toHaveText(
    filterdatalaptop.videocard
  );
});

Then(/^I assert that the image is present$/, async () => {
  await expect(FilterResults.filterResultItemImg).toBeDisplayed();
});

Then(/^I assert that the price is present$/, async () => {
  await expect(FilterResults.filterResultPrice).toBeDisplayed();
});

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
  await expect(FilterResults.filterResultPrice).toHaveText(
    filterdatamobile.price
  );
});

Then(/^I assert that the image is present$/, async () => {
  await expect(FilterResults.filterResultItemImg).toBeDisplayed();
});
