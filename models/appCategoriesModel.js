const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppCategoriesSchema = new Schema({
  name: { type: String, required: true, unique: true },
  disabled: { type: Boolean, required: true, default: false },
});

const AppCategories = mongoose.model("AppCategories", AppCategoriesSchema);

module.exports = AppCategories;
