//server.js
//dependencies
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express app to handle data parsing

var app = express();

// var PORT = 3000; not needed

// Configure Express.js middle-wares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
//app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));  //add w paul

//grab the routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Starts the server to begin listening
// =============================================================
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    console.log(`go to http://localhost:${PORT}`);
    console.log(`go to http://localhost:${PORT}/survey`);
});
