const click = async (element) => {
  await element.click();
};
const setText = async (element, text) => {
  await element.setValue(text);
};
module.exports = { click, setText };
