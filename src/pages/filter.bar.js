const Page = require("./page");
const {
  click,
  selectCheckbox,
  scrollIntoView,
} = require("../../src/utils/commands");

class FilterBar extends Page {
  // CCS locator for brand section (same for mobile and notebook filtering)
  get brandSection() {
    return $(".j-producers .filter-attr__name");
  }
  // CSS selector for processor model (used in notebook filtering)
  get processorSection() {
    return $(
      ".b-filter .filter__attrs:nth-child(4) .b-filter-attr:nth-child(12) .j-filter__fold"
    );
  }
  // CSS locators for videocard section (used in notebook filtering)
  get vidocardSection() {
    return $(
      ".b-filter .filter__attrs:nth-child(4) .b-filter-attr:nth-child(18) .j-filter__fold"
    );
  }
  // CSS locator for label in brand section (same for mobile and notebook filtering)
  get productBrand() {
    return $$(".b-filter .filter__attrs:nth-child(3) .g-form__checklabel");
  }
  // CSS locators for status section (used in notebook filtering) In stock, request etc
  get productStatus() {
    return $$(".b-filter .filter__attrs:nth-child(2) .g-form__checklabel");
  }
  // CSS locators for videocard labels (used in notebook filtering) AMD Radeon Pro 5500M etc
  get productVidocard() {
    return $$(
      ".b-filter .filter__attrs:nth-child(4) .b-filter-attr:nth-child(18) .g-form__checklabel"
    ); // .j-plus__toggle
  }
  // CSS locators for processor labels (used in notebook filtering) AMD Athlon etc
  get productProcessor() {
    return $$(
      ".b-filter .filter__attrs:nth-child(4) .b-filter-attr:nth-child(12) .g-form__checklabel"
    ); // .j-plus__toggle
  }
  // CSS locators for show button (get you to filtering results)
  get showBtn() {
    return $("button#j-filter__btn");
  }

  async scrollToProcessorSection() {
    await scrollIntoView(this.processorSection);
  }

  async scrollToVideoCardSection() {
    await scrollIntoView(this.vidocardSection);
  }

  async scrollToBrandSection() {
    await scrollIntoView(this.brandSection);
  }

  async clickOnprocessorLink() {
    await click(this.processorSection);
  }
  async clickOnvideocardLink() {
    await click(this.vidocardSection);
  }

  async selectProductStatus(status) {
    await selectCheckbox(this.productStatus, status);
  }

  async selectProductBrand(brand) {
    await selectCheckbox(this.productBrand, brand);
  }

  async selectProductVidocard(videocard) {
    await selectCheckbox(this.productVidocard, videocard);
  }

  async selectProductProcessor(processor) {
    await selectCheckbox(this.productProcessor, processor);
  }

  async clickshowBtn() {
    await click(this.showBtn);
  }
}

module.exports = new FilterBar();
