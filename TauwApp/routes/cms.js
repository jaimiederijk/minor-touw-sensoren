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

router.get('/remove/:sensorID', function(req, res, next) {
    var query = {
        ObjectId: req.params.sensorID
    }
    login.checkLogin(req, res);
    connector.find.removeItem(query, function(docs){
        res.redirect("/cms")
    });
});

router.get('/add', function(req, res, next) {
  var query = {};
  var field = {};
      connector.find.findSettings (query, field, function(docs) {
          console.log(docs[0].sector)
          res.render('form', {
              title: "add a sensor",
              page: "form",
              AllSettings: {
                  sector: docs[0].sector,
                  branch: docs[0].branch,
                  tags: docs[0].tags,
                  level: docs[0].level,
                  scale: docs[0].scale,
                  resolution: docs[0].resolution,
                  accuracy: docs[0].accuracy,
                  interval: docs[0].interval,
                  duration: docs[0].duration,
                  innovation: docs[0].innovation,
                  costs: docs[0].costs,

                //   contact: docs[0].contact,
                //   email: docs[0].email,
                //   mobile: docs[0].mobile,
                //   profilePhoto: docs[0].profilePhoto,
                  //
                //   referenceTitle: docs[0].referenceTitle,
                //   refSummary: docs[0].refSummary,
                //   refLink: docs[0].refLink,
              }

        });
    });
});

router.post('/add', function(req, res, next) {
  res.redirect("/cms/add")
});

router.get('/edit/:sectorName/:branchName/:sensorName', function(req, res, next) {
    var query = {
        sector: req.params.sectorName,
        branch: req.params.branchName,
        name: req.params.sensorName
    }
console.log(login_status)
    if (login_status === true){
        connector.find.findSensors( query, function(docs){
            console.log(docs)
          res.render('edit', {
              title: query.sector,
              page: "detail",
              currentSector: query.sector,
              currentBranch: query.branch,
              currentSensor: query.name,
              sensor: docs[0]
          });
        });
    }
  else{
      res.redirect('/cms');
  }
});

var login = {
    checkLogin: function(req, res) {
        if (req.body.username === "aaa" && req.body.password === "aaa"){
            login_status = true;
        }
        else{
            login_status = false;
        }
    },
}

module.exports = {router: router};
