var express = require('express');
var router = express.Router();
var connector  = require('../lib/connector');
var sensorName =""

router.get('/:sectorName/:sensorName', function(req, res) {
    sensorName = req.params.sensorName;

    var query = {
          sector: req.params.sectorName,
        //   name: req.params.sensorName
    }
    connector.find( query, function(docs){
        console.log("DOCS")
        console.log("------------------------------")
        console.log(docs)
        console.log("------------------------------")
        res.render('detail', {
            title: 'homepage2',
            allSensors: docs,
            curentSector: query.sector,
            sensor: filterOnSensor(docs)
        });
      });
});

function filterOnSensor(object, item){
    for (i = 0; i < object.length; i++) {
        if (object[i].name == sensorName){
            console.log("It's the same");
            console.log(object[i])
            return object[i];
        }
    }
}


module.exports = {router: router};
