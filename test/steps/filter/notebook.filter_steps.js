const { Given, When, Then } = require("@cucumber/cucumber");
const FilterBar = require("../../../src/pages/filter.bar");
const FilterResults = require("../../../src/pages/filter.results");
const filterdatalaptop = require("../../resources/filter_data_laptops.json");

Given(/^I am on notebooks product page$/, async () => {
  await browser.url("https://www.21vek.by/notebooks/");
});

When(
  /^I filter on notebooks product page by (.+) and (.+) and (.+) and (.+)$/,
  async (status, brand, videocard, processor) => {
    await FilterBar.selectProductStatus(status);
    await FilterBar.scrollToBrandSection();
    await FilterBar.selectProductBrand(brand);

    await FilterBar.scrollToVideoCardSection();
    await FilterBar.clickOnvideocardLink();
    await FilterBar.selectProductVidocard(videocard);

    await FilterBar.scrollToProcessorSection();
    await FilterBar.clickOnprocessorLink();

    await FilterBar.clickShowMoreButtonProcessorSection();
    await FilterBar.selectProductProcessor(processor);
    await FilterBar.clickshowBtn();
  }
);

Then(
  /^I assert on notebooks product that there are only one match$/,
  async () => {
    await expect(FilterResults.getFilterResultCount()).toBeElementsArrayOfSize(
      1
    );
  }
);

Then(
  /^I assert on notebooks product that the specified parameters match$/,
  async () => {
    await expect(FilterResults.filterResultItemName).toHaveText(
      filterdatalaptop.name
    );
    await expect(FilterResults.filterResultProcessorName).toHaveText(
      filterdatalaptop.processor
    );
    await expect(FilterResults.filterResultVideoCardName).toHaveText(
      filterdatalaptop.videocard
    );
  }
);

Then(/^I assert on notebooks product that the image is present$/, async () => {
  await expect(FilterResults.filterResultItemImg).toBeDisplayed();
});

Then(/^I assert on notebooks product that the price is present$/, async () => {
  await expect(FilterResults.filterResultPrice).toBeDisplayed();
});
