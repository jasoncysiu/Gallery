const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FunctionalitiesModelSchema = new Schema({
  name: { type: String, required: true, unique: true },
  disabled: { type: Boolean, required: true, default: false },
});

const ModelFunctionalities = mongoose.model(
  "ModelFunctionalities",
  FunctionalitiesModelSchema
);

module.exports = ModelFunctionalities;
