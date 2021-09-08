//Funtion for element clicking
const click = async (element) => {
  await element.click();
};
// Function that set text into input
const setText = async (element, text) => {
  await element.setValue(text);
};
// Function, that seek checkbox by title
const selectCheckbox = async (elements, title) => {
  for (let i = 0; i < (await elements).length; i++) {
    const elem = await elements[i].getAttribute("title");
    if (elem == title) {
      await elements[i].click();
      break;
    }
  }
};
// Function for scroll to element
const scrollIntoView = async (element) => {
  await element.scrollIntoView();
};
// Function with wait that wait for element be clickable
const waitUntilAvilable = async (element) => {
  await element.waitForClickable({ timeout: 5000 });
};

module.exports = {
  click,
  setText,
  selectCheckbox,
  scrollIntoView,
  waitUntilAvilable,
};
