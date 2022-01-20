const ModelFunctionalities = require("../models/functionalitiesModel");
const AppCategories = require("../models/appCategoriesModel");
const Interaction = require("../models/interactionModel");

const createFilter = (req, res) => {
  const filter = req.query.filterName;
  if (filter) {
    if (filter === "model_functionalities") {
      createModelFunctionalities(req, res);
    } else if (filter === "app_categories") {
      createAppCategories(req, res);
    } else if (filter === "interaction") {
      createInteraction(req, res);
    } else {
      res.status(400).json({ message: "Invalid filter type" });
    }
  } else {
    res.status(400).json({ message: "Filter not specified" });
  }
};

const createModelFunctionalities = (req, res) => {
  let functionality = new ModelFunctionalities({
    name: req.body.name,
    disabled: false,
  });

  ModelFunctionalities.findOne({ name: req.body.name }, (err, sameName) => {
    if (err) {
      res.status(400).json({
        message: "Error getting filter",
      });
    } else if (sameName) {
      res.status(400).json({
        message: "Filter name is taken",
      });
    } else {
      functionality.save((err, obj) => {
        if (err) console.log(err);
        res.status(200).json(obj);
      });
    }
  });
};

const createAppCategories = (req, res) => {
  let category = new AppCategories({
    name: req.body.name,
    disabled: false,
  });

  AppCategories.findOne({ name: req.body.name }, (err, sameName) => {
    if (err) {
      res.status(400).json({
        message: "Error getting filter",
      });
    } else if (sameName) {
      res.status(400).json({
        message: "Filter name is taken",
      });
    } else {
      category.save((err, obj) => {
        if (err) console.log(err);
        res.status(200).json(obj);
      });
    }
  });
};

const createInteraction = (req, res) => {
  if (req.body.name && req.body.type) {
    let interaction = new Interaction({
      name: req.body.name,
      type: req.body.type,
      disabled: false,
    });

    Interaction.findOne(
      { name: req.body.name, type: req.body.type },
      (err, sameName) => {
        if (err) {
          res.status(400).json({
            message: "Error getting filter",
          });
        } else if (sameName) {
          res.status(400).json({
            message: "Filter name is taken",
          });
        } else {
          interaction.save((err, obj) => {
            if (err) console.log(err);
            res.status(200).json(obj);
          });
        }
      }
    );
  } else {
    res.status(400).json({
      message: "One of more fields have not been given",
    });
  }
};

module.exports = {
  createFilter,
};
