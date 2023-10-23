const allcatfun = require("../Controller/Controller");

const route = require("express").Router();

route.get("/allcatdata", allcatfun);

module.exports = route;