var express = require('express');
var router = express.Router();
var searchMachine  = require('../lib/search');
var connector  = require('../lib/connector');

var sensorName =""


router.get('/:sectorName', function(req, res, next) {
  var query = {
      sector: req.params.sectorName
  }

  if (req.query.search !== undefined){
      searchMachine.search.renderSearchResults(req, res, req.query.search);
  }
  else {
      connector.find.findSensors( query, function(docs){
        res.render('sector', {
            title: query.sector,
            page: "sector",
            curentSector: query.sector,
            allSensors: docs
        });
      });
  }
});

router.get('/:sectorName/:branchName', function(req, res, next) {
  var query = {
      sector: req.params.sectorName,
      branch: req.params.branchName
  }

  if (req.query.search !== undefined){
      searchMachine.search.renderSearchResults(req, res, req.query.search);
  }
  else {
      connector.find.findSensors( query, function(docs){
          console.log(docs)
        res.render('branch', {
            title: query.sector,
            page: "branch",
        });
      });
  }
});

router.get('/:sectorName/:branchName/:sensorName', function(req, res, next) {
  var query = {
      sector: req.params.sectorName,
      branch: req.params.branchName,
      name: req.params.sensorName
  }

  if (req.query.search !== undefined){
      searchMachine.search.renderSearchResults(req, res, req.query.search);
  }
  else{
      connector.find.findSensors( query, function(docs){
          console.log(docs)
        res.render('detail', {
            title: query.sector,
            page: "detail",
            sensor: docs[0]
        });
      });
  }
});



module.exports = {router: router};
