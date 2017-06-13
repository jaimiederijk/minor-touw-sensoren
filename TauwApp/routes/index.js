var express = require('express');
var router = express.Router();
var connector  = require('../lib/connector');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Home',
      curentSector: "",
      allSensors: {sector: "nothing"}
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
        curentSector: query.sector,
        allSensors: docs
    });
  });
});
module.exports = {router: router};
