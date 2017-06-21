var express = require('express');
var router = express.Router();
var searchMachine  = require('../lib/search');
var connector  = require('../lib/connector');
var queryCreator = require('../lib/querycreator');

var sensorName =""


router.get('/:sectorName', function(req, res, next) {
  var query = {};
  var field = { branch: 1 };

  if (req.query.search !== undefined){
      searchMachine.search.renderSearchResults(req, res, req.query.search);
  }
  else {

      connector.find.findSettings (query, field, function(docs) {
        res.render('sector', {
            title: req.params.sectorName,
            page: "sector",
            currentSector: req.params.sectorName,
            allBranches: docs[0]
        });
      });
  }
});

router.get('/:sectorName/:branchName', function(req, res, next) {
  var currentQuery = {
      sector: req.params.sectorName,
      branch: req.params.branchName
  }
  var activeFilters = {};
  var filters = ["scale", "accuracy","resolution","interval","innovation"];
  // loop door alle filters
  var query = queryCreator.queryCreator.orFilterQuery(currentQuery, req.query, filters);


console.log(query);
  if (req.query.search !== undefined){
      searchMachine.search.renderSearchResults(req, res, req.query.search);
  }
  else {
      connector.find.findSensors( query, function(docs){
          console.log(docs)
        res.render('branch', {
            title: query.sector,
            page: "branch",
            activeFilters: activeFilters,
            currentSector: query.sector,
            currentBranch: query.branch,
            allSensors: docs
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
            currentSector: query.sector,
            currentBranch: query.branch,
            currentSensor: query.name,
            sensor: docs[0]
        });
      });
  }
});



module.exports = {router: router};
