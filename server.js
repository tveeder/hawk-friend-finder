//server.js
//dependencies
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express app to handle data parsing

var app = express();
var PORT = 3000;

// Configure Express.js middle-wares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//grab the routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Starts the server to begin listening
// =============================================================
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("App listening on PORT " + PORT);
});
