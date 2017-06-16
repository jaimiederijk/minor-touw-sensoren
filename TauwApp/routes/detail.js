var express = require('express');
var router = express.Router();
var connector  = require('../lib/connector');
var sensorName =""

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
        sensors: docs
    });
  });
});

router.get('/:sectorName/:branchName', function(req, res) {
    var query = {
        sector: req.params.sectorName,
        branch: req.params.branchName
    }
    connector.find( query, function(docs){
        console.log("DOCS")
        console.log("------------------------------")
        console.log(docs)
        console.log("------------------------------")
        res.render('branch', {
            title: query.branch,
            page: "detail",
            allSensors: docs
        });
      });
});

router.get('/:sectorName/:branchName/:sensorName', function(req, res) {
    sensorName = req.params.sensorName;
    console.log(sensorName);

    var query = {
          sector: req.params.sectorName,
          branch: req.params.branchName,
          name: req.params.sensorName
    }
    console.log("/:sectorName/:branchName/:sensorName")
    connector.find( query, function(docs){
        res.render('detail', {
            title: query.sensor,
            page: "detail",
            sensor: docs[0]
        });
      });
});

module.exports = {router: router};
