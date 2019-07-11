//htmlRoutes will load the html pages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//we are going to declare a module exports object that will take the routes we will establish here and make them easily usable in the serverjs file.
module.exports = function (app) {
    app.get('/', function (request, response) {
        response.sendFile(path.join(__dirname, '../public/home.html'));
    });
    app.get('/survey', function (request, response) {
        response.sendFile(path.join(__dirname, '../public/survey.html'));
    });
}