var express = require('express');
var router = express.Router();
var searchMachine  = require('../lib/search');
var connector  = require('../lib/connector');
var login_status = false;

router.get('/', function(req, res, next) {
    var query = {}
    login.checkLogin(req, res);

    if (req.query.search !== undefined){
        searchMachine.search.renderCMSSearchResults(req, res, req.query.search);
    }
    else{
        connector.find.findSensors( query, function(docs){
            res.render('cms', {
                title: "cms",
                page: "cms",
                logged_in: true,
                allSensors: docs
            });
        });
    }
});

router.post('/', function(req, res, next) {
    var query = {};

    login.checkLogin(req, res);
    connector.find.findSensors( query, function(docs){
        res.render('cms', {
            title: "cms",
            page: "cms",
            logged_in: login_status,
            allSensors: docs
        });
    });
});

router.get('/add', function(req, res, next) {
  var query = {};
  var field = {};
      connector.find.findSettings (query, field, function(docs) {
          console.log(docs[0].sector)
          res.render('form', {
              title: "add a sensor",
              page: "cms",
              AllSettings: docs[0],
          });
    });
});

router.post('/add', function(req, res, next) {
    console.log(req.body)
    var jsonObject = req.body
    console.log(jsonObject)

    connector.find.createNewSensor(jsonObject);

  res.redirect("/cms")
});

router.get('/edit/:sensorID', function(req, res, next) {
    var query = {
        id: req.params.sensorID,
    }
    var query2 = {};
    var field = {};
    connector.find.findSensorId( query, function(docs){
        var allSensors = docs[0];
        connector.find.findSettings (query2, field, function(docs) {
            // console.log(docs[0].sector)
            res.render('edit', {
                title: "add a sensor",
                page: "cms",
                currentSector: docs[0].sector,
                currentBranch: docs[0].branch,
                currentSensor: docs[0].name,
                AllSettings: docs[0],
                allSensors: allSensors
            });
      });
    });
});

router.post('/edit/:sensorID', function(req, res, next) {
    var query = { id: req.params.sensorID};
    console.log(query.id)
    var jsonObject = req.body;

    connector.find.editSensor(query, jsonObject, function(req, res, next) {
        console.log(query)
        });
    res.redirect('/cms');
});

router.get('/remove/:sensorID', function(req, res, next) {
    var query = {
        id: req.params.sensorID
    }
    login.checkLogin(req, res);
    connector.find.removeItem(query, function(docs){
        res.redirect("/cms")
    });
});


var login = {
    checkLogin: function(req, res) {
        if (req.body.username === "aaa" && req.body.password === "aaa"){
            login_status = true;
        }
        else{
            login_status = true;
        }
    },
}

module.exports = {router: router};
