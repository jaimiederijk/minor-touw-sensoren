var express = require('express');
var router = express.Router();
var searchMachine  = require('../lib/search');
var connector  = require('../lib/connector');

var requiredData = ["sector","branch","tags","level","scale"]
// var login_status = false;
var requireInputs = false;
var retryForm = false;

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
          res.render('form', {
              title: "add a sensor",
              page: "cms",
              retryForm: retryForm,
              AllSettings: docs[0],
          });
    });
});

router.post('/add', function(req, res, next) {
    var jsonObject = req.body;
    requiredFields.checkRequiredFields(jsonObject);

    if (requireInputs == true){
        cleanPost.removeEmptyStrings(jsonObject);
        connector.find.createNewSensor(jsonObject);
        retryForm = false;
        res.redirect("/cms")
    }
    else{
        retryForm = true; //Please try again and make sure, every required field is filled in.
        res.redirect('/cms/add');
    }
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
            res.render('edit', {
                title: "add a sensor",
                page: "cms",
                retryForm: retryForm,
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

    requiredFields.checkRequiredFields(jsonObject);
    if (requireInputs == true){
        console.log("requireInputs where filled in")
        cleanPost.removeEmptyStrings(jsonObject);
        connector.find.editSensor(query, jsonObject);
        retryForm = false;
        res.redirect('/cms');
    }
    else{
        retryForm = true; //Please try again and make sure, every required field is filled in.
        res.redirect('/cms/edit/'+query.id);
    }

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

// This object contains functions, that check if the requiredFields in the form contain any data. If not all the fields are filled in. This code will give it the 'requireInputs = false' and it wil reload the corresopondig form.
var requiredFields ={
    checkRequiredFields: function (jsonObject) {
        var jsonObject =jsonObject;
        var validInputCount = 0;

        requiredData.forEach(function(element) {
            if (jsonObject[element].length > 1){
                validInputCount++
            };
        });
        requiredFields.checkingRequiredFields(validInputCount);
    },
    checkingRequiredFields: function(validInputCount){
        var requiredLength = requiredData.length;
        if(validInputCount == requiredLength){
            requireInputs = true;
        }
        else{
            requireInputs = false;
        }
    }
}

// This object contains functions, that checks if the form contains any new settings items, but it first removes all the unused strings out of the data.
var cleanPost = {
    removeEmptyStrings: function(data){
        console.log("removeEmptyStrings")
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
        console.log("checkForNewItems")
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

// This object contains functions, that checks if the new settings input is really new, or if it's already in the databse.
var settingsHandeler = {
    init: function(keys, data){
        var query= {};
        var field = {};

        connector.find.findSettings (query, field, function(docs) {
            settingsHandeler.checkForDouble(docs[0], keys, data)
        });
    },
    checkForDouble: function(settings,keys, data){
        console.log("checkForDouble")
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
        console.log("addNewSetting")
        connector.find.editSettings(settings);
    },
}

module.exports = {router: router};
