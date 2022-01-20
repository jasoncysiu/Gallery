const AppCategories = require("../models/appCategoriesModel");
const Data = require("../models/dataModel");
const ModelFunctionalities = require("../models/functionalitiesModel");
const Interactions = require("../models/interactionModel");

const createData = (req, res) => {
  const {
    model_functionalities,
    app_categories,
    interaction,
    representation,
    image_name,
    package_name,
  } = req.body;

  ModelFunctionalities.findOne({ name: model_functionalities }, (err, filter));

  let data = new Data({
    modelFunctionalities: model_functionalities,
    appCategories: app_categories,
    interaction: interaction,
    representation: representation,
    imageName: image_name,
    packageName: package_name,
  });

  Data.findOne(
    {
      modelFunctionalities: model_functionalities,
      appCategories: app_categories,
      interaction: interaction,
      representation: representation,
    },
    (err, sameName) => {
      if (err) {
        res.status(400).json({
          message: "Error getting data",
        });
      } else if (sameName) {
        res.status(400).json({
          message: "Data already exists",
        });
      } else {
        data.save((err, obj) => {
          if (err) console.log(err);
          res.status(200).json(obj);
        });
      }
    }
  );
};

const getAllData = (req, res) => {
  Data.find({})
    .populate({ path: "modelFunctionalities", select: "name" })
    .populate({ path: "appCategories", select: "name" })
    .populate({ path: "interaction", select: "name type" })
    .exec((err, data) => {
      if (err) {
        res.status(400).json({
          message: "Error getting data",
        });
      } else {
        res.status(200).json(data);
      }
    });
};

const importArray = async (req, res) => {
  const data = req.body;

  const formatDataArray = (element) => {
    const {
      model_functionalities,
      app_categories,
      interaction_type,
      interaction_style,
      representation,
      image_name,
      package_name,
      FIELD1,
    } = element;

    let formattedElement = {
      representation,
      imageName: image_name,
      packageName: package_name,
    };

    const funcQuery = ModelFunctionalities.findOne({
      name: model_functionalities,
    }).select("_id");
    funcQuery.exec((err, result) => {
      if (err) res.code(200).json({ message: "Error retrieving data" });
      formattedElement.modelFunctionalities = result._id;
      console.log("Model functionalities done", element.FIELD1);

      const catQuery = AppCategories.findOne({
        name: app_categories,
      }).select("_id");
      catQuery.exec((err, result) => {
        if (err) res.code(200).json({ message: "Error retrieving data" });
        formattedElement.appCategories = result._id;
        console.log("App Categories done", element.FIELD1);

        const interactionQuery = Interactions.findOne({
          name: interaction_style,
          type: interaction_type,
        }).select("_id name");
        interactionQuery.exec((err, result) => {
          if (err) res.code(200).json({ message: "Error retrieving data" });
          formattedElement.interaction = result._id;
          console.log("Interactions done", element.FIELD1);

          let newData = new Data(formattedElement);

          newData.save((err, obj) => {
            if (err) res.code(200).json({ message: "Error saving data" });
          });
        });
      });
    });
  };

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    formatDataArray(element);
  }

  res.status(200).json({ message: "Saved" });
};

module.exports = {
  createData,
  getAllData,
  importArray,
};
