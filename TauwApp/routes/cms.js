var express = require('express');
var router = express.Router();
var searchMachine  = require('../lib/search');
var connector  = require('../lib/connector');
var login_status = false;
var settingCollection = [];


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

        //   console.log(docs[0].sector)
          res.render('form', {
              title: "add a sensor",
              page: "cms",
              AllSettings: docs[0],
          });
    });
});

router.post('/add', function(req, res, next) {
    var jsonObject = req.body

    cleanPost.removeEmptyStrings(jsonObject);
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
            console.log("---------------------------")
            console.log(allSensors)
            console.log("---------------------------")
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
    var jsonObject = req.body;

    cleanPost.removeEmptyStrings(jsonObject);
    connector.find.editSensor(query, jsonObject);

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

var cleanPost = {
    removeEmptyStrings: function(data){
        Object.keys(data).forEach(function(key) {
            if (data[key].length > 1){
                if (data[key].indexOf("") > 0){
                    var i = data[key].indexOf("");
                    data[key].splice(i, 1)
                }
            }
        });
        cleanPost.checkForNewItems(data);
    },
    checkForNewItems: function(data){
        var keys = []
        Object.keys(data).forEach(function(key) {
            if (data[key].indexOf("nieuw") > 0){
                var i = data[key].indexOf("nieuw");
                data[key].splice(i, 1)
                keys.push(key)
            }
        });
        settingsHandeler.init(keys, data)
    },
}

var settingsHandeler = {
    init: function(keys, data){
        var query= {};
        var field = {};

        connector.find.findSettings (query, field, function(docs) {
            settingsHandeler.checkForDouble(docs[0], keys, data)
        });
    },
    checkForDouble: function(settings,keys, data){
        var updatedSettings = settings;
        for (i = 0; i < keys.length; i++) {
            var currentKey = keys[i];
            var currentSector = data[currentKey];
            var lastItem = currentSector.length -1;
            updatedSettings[currentKey].push(currentSector[lastItem]);
        }
        settingsHandeler.addNewSetting(updatedSettings);
    },
    addNewSetting: function (settings) {
        connector.find.editSettings(settings);
    },
}

module.exports = {router: router};
