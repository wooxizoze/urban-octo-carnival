const click = async (element) => {
  await element.click();
};

const setText = async (element, text) => {
  await element.setValue(text);
};

const selectCheckbox = async (elements, title) => {
  for (let i = 0; i < (await elements).length; i++) {
    const elem = await elements[i].getAttribute("title");
    if (elem == title) {
      await elements[i].click();
      break;
    }
  }
};

const scrollIntoView = async (element) => {
  await element.scrollIntoView();
};

module.exports = {
  click,
  setText,
  selectCheckbox,
  scrollIntoView,
};
