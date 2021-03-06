var express = require('express');
var router = express.Router();
var searchMachine  = require('../lib/search');
var connector  = require('../lib/connector');
var filterUtils = require('../lib/filterUtils');

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
  connector.find.findSettings({}, {"filters":1}, function(settings) {
    var filters = settings[0].filters;
    // loop door alle filters
    var query = filterUtils.utils.orFilterQuery(currentQuery, req.query, filters);

    if (req.query.search !== undefined){
        searchMachine.search.renderSearchResults(req, res, req.query.search);
    }
    else {
        connector.find.findSensors( query, function(docs){

          var filterObj = filterUtils.utils.filterBuilder(docs, filters);
          var reqQuery = Object.keys(req.query).length === 0 ? "false" : req.query;

          res.render('branch', {
              title: query.sector,
              page: "branch",
              currentSector: query.sector,
              currentBranch: query.branch,
              activeFilters: filterObj,
              checkedFilters: reqQuery,
              filters: filters,
              allSensors: docs
          });
        });
    }
  })

});

router.get('/db/:x/:sectorName/:branchName', function(req, res, next) {
  var currentQuery = {
      sector: req.params.sectorName,
      branch: req.params.branchName
  }
  connector.find.findSettings({}, {"filters":1}, function(settings) {
    var filters = settings[0].filters;
    // loop door alle filters
    var query = filterUtils.utils.orFilterQuery(currentQuery, req.query, filters);

    connector.find.findSensors( query, function(docs){
      if (req.params.x == "f") {
        var filterObj = filterUtils.utils.filterBuilder(docs, filters);
        var reqQuery = Object.keys(req.query).length === 0 ? "false" : req.query;
        if (docs.length == 1) {
          filters = Object.keys(reqQuery);
        }

        res.render('partials/filters', {
            page: "filters",
            activeFilters: filterObj,
            checkedFilters: reqQuery,
            filters: filters
        });
      } else {
        res.render('partials/results', {
            page: "results",
            currentSector: query.sector,
            currentBranch: query.branch,
            allSensors: docs
        });
      }
    });
  });
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
