const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");

// iniciando app
const app = express();
app.use(cors());
app.use(express.json());

//iniciando o DB
mongoose.connect("mongodb://localhost:27017/crud-simple", {
  useNewUrlParser: true
});

requireDir("./src/model");

app.use(express.static(__dirname + "/public"));

// view engine setup
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(bodyParser.urlencoded());

//rotas
app.use("/", require("./src/routes"));

app.listen(3001);
