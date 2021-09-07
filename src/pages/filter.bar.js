const Page = require("./page");
const {
  click,
  selectCheckbox,
  scrollIntoView,
  setText,
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

  //Mobile locators
  // CSS locator for processor checkboxes (used in mobile foltering)
  get processorType() {
    return $$(
      ".b-filter .filter__attrs:nth-child(4) .b-filter-attr:nth-child(7) .g-form__checklabel"
    );
  }
  //CSS locator for diagonal size labels (used in mobile testing)
  get diagonalSize() {
    return $("input[name='filter[2501][from]']");
  }
  // CSS locator for body color labels (used in mobile testing)
  get bodyColor() {
    return $$(
      ".b-filter .filter__attrs:nth-child(4) .b-filter-attr:nth-child(15) .g-form__checklabel"
    );
  }
  // CSS locator for memory size (used in mobile testing)
  get memorySize() {
    return $$(
      ".b-filter .filter__attrs:nth-child(4) .b-filter-attr:nth-child(6) .g-form__checklabel"
    );
  }
  // CSS locator for processor type section (used in mobile testing)
  get processorTypeSection() {
    return $(
      "#j-filter__form > div:nth-child(4) > dl:nth-child(7) > dt > span"
    );
  }
  // CSS locator for diagonal section (used in mobile testing)
  get diagonalSizeSection() {
    return $("dl:nth-of-type(4) > .filter-attr__name > .g-pseudo_href");
  }
  // CSS locator for body color (used in mobile testing)
  get bodyColorSection() {
    return $(
      ".b-filter .filter__attrs:nth-child(4) .b-filter-attr:nth-child(15) .j-filter__fold"
    );
  }
  // Open memory size section
  get memorySizeSection() {
    return $(
      ".b-filter .filter__attrs:nth-child(4) .b-filter-attr:nth-child(6) .j-filter__fold"
    );
  }

  // Open processor type section
  async openProcessorTypeSection() {
    await click(this.processorTypeSection);
  }
  // Open body color section
  async openBodyColorSection() {
    await click(this.bodyColorSection);
  }
  // Open memory size section
  async openMemorySizeSection() {
    await click(this.memorySizeSection);
  }
  // Scroll to processor type section
  async scrollToProcessorTypeSection() {
    await scrollIntoView(this.processorTypeSection);
  }
  // Scroll to diagonal type section
  async scrollToDiagonalSizeSection() {
    await scrollIntoView(this.diagonalSizeSection);
  }
  // Scroll to memory section
  async scrollTomemorySectionSection() {
    await scrollIntoView(this.memorySizeSection);
  }
  // Scroll to body color section
  async scrollBodyColorSection() {
    await scrollIntoView(this.bodyColorSection);
  }
  // Click on diagonal size section
  async clickOnDiagonalSizeSection() {
    await click(this.diagonalSizeSection);
  }
  // Select processor type (for mobile filtering)
  async selectProcessorType(mobile_processor) {
    await selectCheckbox(this.processorType, mobile_processor);
  }
  // Set diagonal size
  async setDiagonalSize(diagonal) {
    await setText(this.diagonalSize, diagonal);
  }
  // Select body color (for mobile filtering)
  async selectBodyColor(color) {
    await selectCheckbox(this.bodyColor, color);
  }
  // Select memory size (for mobile filtering)
  async selectMemorySize(memory) {
    await selectCheckbox(this.memorySize, memory);
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
  // Click on show button to filter results
  async clickshowBtn() {
    await click(this.showBtn);
  }
}

module.exports = new FilterBar();
