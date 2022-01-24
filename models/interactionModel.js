const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InteractionSchema = new Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: ["No Interaction", "Static", "Dynamic"],
  },
  disabled: { type: Boolean, required: true, default: false },
});

const Interactions = mongoose.model("Interactions", InteractionSchema);

module.exports = Interactions;
