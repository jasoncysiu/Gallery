const validateSearch = (queries) => {
  const { model_functionalities, app_categories, interaction_style } = queries;
  if (model_functionalities && app_categories && interaction_style) {
    return true;
  } else {
    return false;
  }
};

module.exports = { validateSearch };
