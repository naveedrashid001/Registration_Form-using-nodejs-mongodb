const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const formRoute = require("./routes/formRoutes");
const PORT = 3000;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
mongoose.connect("mongodb://localhost:27017/Rigestration_Form");


var db = mongoose.connection;
db.on("error", () => console.log("Error in connecting to database"));
db.once("open", () => console.log("Successfully connected to database"));

// Routes
app.use("/", formRoute);

// Start server
app.listen(PORT, () => console.log(`Server is running at port no: ${PORT}`));
