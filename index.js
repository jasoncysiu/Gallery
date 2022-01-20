const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const url = require("url");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// Define Server
const app = express();
const port = process.env.PORT || 8000;
const dbURI = process.env.MONGDB_CONNECTION_STRING;

// FOR BODY-PARSER MIDDLEWARE
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const { validateSearch } = require("./modules/validation");
const { searchData } = require("./modules/search");

const apiRoutes = require("./routes/apiRoutes");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.static("public")); // Setup public folder for static files
app.use(cors()); //CORS

// Set up the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").renderFile);

// MONGOOSE CONNECTION
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TEST DATABASE CONNECTION
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Database connected succefully");
});

const categories = require("./data/categories.json");
const functionalities = require("./data/functionalities.json");
const interactionStyles = require("./data/interactionStyles.json");

app.use("/api", apiRoutes);

// Routes
app.get("/", (req, res) => {
  res.render("pages/index", { categories, functionalities, interactionStyles });
});

app.listen(port, () => {
  console.log("Server is running on PORT: " + port);
});
