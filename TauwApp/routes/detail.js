var express = require('express');
var router = express.Router();

var connector  = require('../lib/connector');

router.get('/:sectorName/:sensorName', function(req, res, next) {
  var query = {
      sector: req.params.sectorName,
      name: req.params.sensorName,
      all: req.params
  }
  connector.find( query, function(docs){
      console.log(query)
    res.render('detail', {
        sensor: query,
        function(){console.log(sensor)}
    });
  } );
});


module.exports = {router: router};
