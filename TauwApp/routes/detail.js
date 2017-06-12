var express = require('express');
var router = express.Router();

var connector  = require('../lib/connector');

router.get('/:sensorName', function(req, res, next) {
  var query = {name: req.params.sensorName}
  connector.find( query, function(docs){
    res.render('detail', { sensor: docs[0]});

  } );

});





module.exports = {router: router};
