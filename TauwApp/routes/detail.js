var express = require('express');
var router = express.Router();
var connector  = require('../lib/connector');
var sensorName =""

router.get('/:sectorName', function(req, res, next) {
  var query = {
      sector: req.params.sectorName
  }
  connector.find.findSensors( query, function(docs){
    res.render('sector', {
        title: query.sector,
        page: "sector",
        curentSector: query.sector,
        allSensors: docs
    });
  });
});

router.get('/:sectorName/:branchName', function(req, res, next) {
  var query = {
      sector: req.params.sectorName,
      branch: req.params.branchName
  }
  connector.find.findSensors( query, function(docs){
      console.log(docs)
    res.render('branch', {
        title: query.sector,
        page: "branch",
    });
  });
});

router.get('/:sectorName/:branchName/:sensorName', function(req, res, next) {
  var query = {
      sector: req.params.sectorName,
      branch: req.params.branchName,
      name: req.params.sensorName
  }
  connector.find.findSensors( query, function(docs){
      console.log(docs)
    res.render('detail', {
        title: query.sector,
        page: "detail",
        sensor: docs[0]
    });
  });
});




// router.get('/:sectorName/:branchName/:sensorName', function(req, res) {
//     sensorName = req.params.sensorName;
//
//     // EXAMPLE FOR Second connector !!!!!
//     var query2 = {};
//     var field = { branch: 1 };
//     connector.find.findSettings(query2, field, function(docs){
//       console.log("branch");
//       console.log(docs);
//     })
//
//     var query = {
//           sector: req.params.sectorName
//     }
//     connector.find.findSensors( query, function(docs){
//         res.render('detail', {
//             title: 'homepage2',
//             page: "detail",
//             allSensors: docs,
//             sensor: filterOnSensor(docs)
//         });
//       });
// });

// function filterOnSensor(object, item){
//     for (i = 0; i < object.length; i++) {
//         if (object[i].name == sensorName){
//             return object[i];
//         }
//     }
// }


module.exports = {router: router};
