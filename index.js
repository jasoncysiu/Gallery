const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const url = require("url");
const cors = require("cors");
const mongoose = require("mongoose");
var morgan = require("morgan");

morgan("tiny");
require("dotenv").config();

// Define Server
const app = express();
const port = process.env.PORT || 8000;
const dbURI = process.env.MONGODB_CONNECTION_STRING;

// FOR BODY-PARSER MIDDLEWARE
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const { validateSearch } = require("./modules/validation");
const { searchData } = require("./modules/search");

const apiRoutes = require("./routes/apiRoutes");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.static(path.resolve(__dirname, "./client/build")));
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
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log("Server is running on PORT: " + port);
});
