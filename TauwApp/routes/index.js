var express = require('express');
var router = express.Router();
var connector  = require('../lib/connector');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Home',
      productList: productList,
      sensor: {sector: "nothing"}
  });
});

router.get('/:sectorName', function(req, res, next) {
  var query = {
      sector: req.params.sectorName
  }
  connector.find( query, function(docs){
    console.log(docs)
    res.render('index', {
        title: 'homepage2',
        productList: productList,
        sensor: docs
    });
  });
});

var productList = {
    branch : ["Bodem", "Afval", "Grondstoffen", "Ecologie", "Water", "Inspectie", "Waterbodem", "Infrastructuur"],
    products: ["XRF", "NIR-handheld (Scio)", "Drone - RGB 3D model", "Mobiele GC", "Satelliet", "Medusa", "Grondradar"]
};


// console.log(parsedJSON)

module.exports = {router: router, productList: productList};
