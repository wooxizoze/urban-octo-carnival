// const { Given, When } = require("@cucumber/cucumber");
// const FilterBar = require("../../src/pages/filter.bar");

// Given(/^I am on product page$/, async () => {
//   await browser.url("/notebooks/");
// });

// When(
//   /^I filter by (.+) and (.+) and (.+) and (.+)$/,
//   async (status, brand, videocard, processor) => {
//     await FilterBar.selectProductStatus(status);
//     await FilterBar.scrollToBrandSection();
//     await FilterBar.selectProductBrand(brand);

//     await FilterBar.scrollToVideoCardSection();
//     await FilterBar.clickOnvideocardLink();
//     await FilterBar.selectProductVidocard(videocard);

//     await FilterBar.scrollToProcessorSection();
//     await FilterBar.clickOnprocessorLink();
//     await FilterBar.selectProductProcessor(processor);
//     await FilterBar.clickshowBtn();
//   }
// );
