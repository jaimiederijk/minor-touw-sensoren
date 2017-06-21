var express = require('express');
var router = express.Router();
var searchMachine  = require('../lib/search');
var connector  = require('../lib/connector');

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
  var query = {
      sector: req.params.sectorName,
      branch: req.params.branchName
  }
  var activeFilters = {};
  var filters = ["scale", "accuracy","resolution","interval","innovation"];
  // loop door alle filters
  for (var i = 0; i < filters.length; i++) {
    // if de filter ook echt is ingevuld
    if (req.query[filters[i]] !== undefined) {
      // kijk of er meerdere checkboxes zijn geselecteerd
      if ( Array.isArray(req.query[filters[i]]) ) {
        // als het geen number is
        if (isNaN(req.query[filters[i]][0])) {
          query[filters[i]]={$in : req.query[filters[i]]};
        // wel een number
        } else {
          var newArray = [];
          for (var t = 0; t < req.query[filters[i]].length; t++) {
            newArray.push(Number(req.query[filters[i]][t]));
          }
          query[filters[i]]={$in : newArray};
        }
      // geen array dus maar één checkbox
      } else {
        // not number
        if (isNaN(req.query[filters[i]])) {
          query[filters[i]] = req.query[filters[i]];
        } else {
          query[filters[i]] = Number(req.query[filters[i]]);
        }

      }
    }
  }


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
