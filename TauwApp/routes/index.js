var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', productList: productList});
});

var productList = {
    branch : ["Bodem", "Afval", "Grondstoffen", "Ecologie", "Water", "Inspectie", "Waterbodem", "Infrastructuur"],
    products: ["XRF", "NIR-handheld (Scio)", "Drone - RGB 3D model", "Mobiele GC", "Satelliet", "Medusa", "Grondradar"]
};
console.log(productList)

module.exports = {router: router, productList: productList};
