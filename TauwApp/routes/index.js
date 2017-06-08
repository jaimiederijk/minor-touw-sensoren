var express = require('express');
var router = express.Router();
var fs = require("fs");

// var JSONData = fs.readFileSync("./TauwSensoren.json");
// JSONData = JSON.parse(JSONData)
// console.log(JSONData)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', productList: productList});
});

var productList = {
    branch : ["Bodem", "Afval", "Grondstoffen", "Ecologie", "Water", "Inspectie", "Waterbodem", "Infrastructuur"],
    products: ["XRF", "NIR-handheld (Scio)", "Drone - RGB 3D model", "Mobiele GC", "Satelliet", "Medusa", "Grondradar"]
};


// console.log(parsedJSON)

module.exports = {router: router, productList: productList};
