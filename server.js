var express = require("express");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});