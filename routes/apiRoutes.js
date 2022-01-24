const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");
const dataController = require("../controllers/dataController");

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

router.get("/search", (req, res) => {
  setTimeout(() => {
    res.status(200).json({ data: data });
  }, 1000);
});

router.get("/filter", categoryController.getFilters);

router.post("/filter", categoryController.createFilter);

router.get("/data", dataController.getAllData);

router.post("/data", dataController.createData);

router.post("/data/import", dataController.importArray);

router.get("/data/search", dataController.searchData);

module.exports = router;
