const Page = require("./page");
const { click, selectCheckbox } = require("../../src/utils/commands");

class FilterBar extends Page {
  get productStatus() {
    return $$("label");
  }
  get productBrand() {
    return $$("label");
  }
  get productVidocard() {
    return $$("label");
  }
  get productProcessor() {
    return $$("label");
  }
  get showMoreBtn() {
    return $$(".cr-filter__unfold .j-plus__toggle");
  }
  get showBtn() {
    return $("button#j-filter__btn");
  }
  get filterOptions() {
    return $$("b-filter-attr cr-filter__toggle cr-filter__fold");
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
  async clickshowMoreBtn() {
    await click(this.clickshowMoreBtn);
  }
}

module.exports = new FilterBar();
