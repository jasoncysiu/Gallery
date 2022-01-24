const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = Schema({
  modelFunctionalities: {
    type: Schema.Types.ObjectId,
    ref: "ModelFunctionalities",
  },
  appCategories: {
    type: Schema.Types.ObjectId,
    ref: "AppCategories",
  },
  interaction: {
    type: Schema.Types.ObjectId,
    ref: "Interactions",
  },
  representation: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
});

const Data = mongoose.model("DataSets", DataSchema);

module.exports = Data;
