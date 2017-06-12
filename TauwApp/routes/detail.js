var express = require('express');
var router = express.Router();
var connector  = require('../lib/connector');

router.get('/:sectorName/:sensorName', function(req, res, next) {
  var query = {
      sector: req.params.sectorName,
      name: req.params.sensorName
  }
  connector.find( query, function(docs){
    res.render('detail', {
        title: 'homepage2',
        sensor: docs
    });
  });
});



module.exports = {router: router};
