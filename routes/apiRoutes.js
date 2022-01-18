const express = require("express");
const router = express.Router();

const data = [
  {
    model_functionalities: "Object detection and tracking",
    app_categories: "Education",
    interaction_type: "Static",
    interaction_style: "Pop-up messages",
    representation: "Text",
    image_name: "plantV.gif",
    package_name: "plantvillage.nuru",
  },
  {
    model_functionalities: "Object detection and tracking",
    app_categories: "Education",
    interaction_type: "Static",
    interaction_style: "Instruction",
    representation: "Text",
    image_name: "ai.fritz.heartbeat.gif",
    package_name: "plantvillage.nuru",
  },
];

// const data = require("../data/data.json");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

router.get("/search", (req, res) => {
  setTimeout(() => {
    res.status(200).json({ data: data });
  }, 1000);
});

module.exports = router;
