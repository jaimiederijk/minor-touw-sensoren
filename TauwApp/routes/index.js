var express = require('express');
var router = express.Router();
var connector  = require('../lib/connector');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Home',
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
        sensor: docs
    });
  });
});
module.exports = {router: router};
