var express = require('express');
var router = express.Router();
var searchMachine  = require('../lib/search');
var connector  = require('../lib/connector');

router.get('/', function(req, res, next) {
    if (req.query.search !== undefined){
        searchMachine.search.renderSearchResults(req, res, req.query.search);
    }
    else {
        res.render('index', {
            title: 'Home',
            curentSector: "",
            page: "index",
            allSensors: {sector: "nothing"}
        });
    }
});

module.exports = {router: router};
 
