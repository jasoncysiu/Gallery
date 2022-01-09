const data = require("../data/data.json");

const searchData = (query) => {
  let matchedData = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (
      element.model_functionalities.toLowerCase() ===
        query.model_functionalities.toLowerCase() &&
      element.app_categories.toLowerCase() ===
        query.app_categories.toLowerCase() &&
      element.interaction_type.toLowerCase() ===
        query.interaction_type.toLowerCase() &&
      element.interaction_style.toLowerCase() ===
        query.interaction_style.toLowerCase()
    ) {
      matchedData.push(element);
    }
  }

  return matchedData;
};

module.exports = { searchData };
