const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const url = require("url");
const cors = require("cors");

// Define Server
const app = express();
const port = process.env.PORT || 8000;

const { validateSearch } = require("./modules/validation");
const { searchData } = require("./modules/search");

const apiRoutes = require("./routes//apiRoutes");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.static("public")); // Setup public folder for static files
app.use(cors()); //CORS

// Set up the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").renderFile);

const categories = require("./data/categories.json");
const functionalities = require("./data/functionalities.json");
const interactionStyles = require("./data/interactionStyles.json");

const data = require("./data/data.json");

app.use("/api", apiRoutes);

// Routes
app.get("/", (req, res) => {
  res.render("pages/index", { categories, functionalities, interactionStyles });
});

app.post("/", (req, res) => {
  res.redirect(
    url.format({
      pathname: "/search",
      query: req.body,
    })
  );
});

app.get("/search", (req, res) => {
  let query = req.query;
  let interactionStyle = query.interaction_style;
  if (!interactionStyle.includes("_")) {
    res.json({ message: "Invalid search parameters" });
  }
  let interaction = interactionStyle.split("_");
  query.interaction_type = interaction[0];
  query.interaction_style = interaction[1];

  if (validateSearch(query)) {
    const searchedData = searchData(query);
    searchedData.length > 0
      ? res.render("pages/search", { queries: query, data: searchedData })
      : res.render("pages/error", {
          message:
            "No results. Currently we are still updating the new interactions.",
        });
  } else {
    res.render("pages/error", {
      message: "Invalid search parameters",
    });
  }
});

app.get("*", (req, res) => {
  res.render("pages/error", { message: "This page doesn't exist" });
});

app.listen(port, () => {
  console.log("Server is running on PORT: " + port);
});
