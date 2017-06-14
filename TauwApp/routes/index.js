var express = require('express');
var router = express.Router();
var connector  = require('../lib/connector');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Home',
      curentSector: "",
      page: "index",
      allSensors: {sector: "nothing"}
  });
});

router.get('/:sectorName', function(req, res, next) {
  var query = {
      sector: req.params.sectorName
  }
  connector.find( query, function(docs){
    console.log(docs)
    res.render('sector', {
        title: query.sector,
        page: "filters",
        curentSector: query.sector,
        allSensors: docs
    });
  });
});
module.exports = {router: router};
