var express = require('express');
var router = express.Router();
var appJS = require('../app.js');
var filters = appJS.filters;


//  Global selectors
var filters = {
    sector : ["Landelijk", "Stedelijk", "Industrie"],
    branch : ["Bodem", "Afval", "Grondstoffen", "Ecologie", "Water", "Inspectie", "Waterbodem", "Infrastructuur"],
    tags : ["Chemisch", "3D model", "Volume bepaling", "Fysisch"],
    level : ["Bodemlucht", "Maaiveld", "Textruur", "Lutum", "Organisch stof", "Metalen", "PAK", "PCB", "Bodemvreemde materialen", "Onderscheidt in chemische verbindingen"],
    scale : ["Handmatig", "Lokaal", "Regionaal", "Provinciaal", "Landelijk", "Internationaal", "n.v.t"],
    resolution: [0,1,2,3,4,5, "n.v.t"],
    accuracy: ["Niet nauwkeurig", "Matig nauwkeurig", "Redelijk nauwkeurig", "Zeer nauwkeurig"],
    interval : ["Jaren","Weken", "Uren", "Direct"],
    duration : ["Jaren","Weken", "Uren", "Minuten"],
    innovation : ["Nog weinig bewijs", "Alleen wetenschappelijk bewezig", "Reeds in enkele projecten toegepast", "Bewezen techniek"],
    costs : ["Gratis tot goedkoop", "?", "Zeer duur"]
};

var logFields = {
    contact: ["contactpersoon", "email", "mobile", "profielfoto"],
    categorie: ["sector", "branch", "tags", "level"],
    details: ["scale", "resolution", "accuracy",  "interval", "duration", "innovation", "costs","samenvatting"],
    reference: ["referentieproject","refSummary"]
};

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('form', {
        title: 'Formulier',
        page: "form",
        filters: filters
    });
});

router.post('/', function(req, res){
    data.checkForNewData(req, res); //Check for new form data.
    log.init(req, res); // Log all the form inputs.
    res.render('form', {
        title: 'Formulier',
        page: "form",
        filters: filters
    });
});

//  Made by Colin Dörr
//---------------------------------------------------
var log = {
    init: function (req, res, item) {
        console.log("-------------------Form Inputs-----------------")
        log.logFormInputs(req, res, "contact");
        log.logFormInputs(req, res, "categorie");
        log.logFormInputs(req, res, "details");
        log.logFormInputs(req, res, "reference");
        console.log("--------------------------------------------------")
    },
    logFormInputs: function(req, res, item) {
        console.log("-----------------"+ item.toUpperCase() +"--------------------")
        for (i = 0; i < logFields[item].length; i++) {
            var current = logFields[item][i];
            console.log(req.body[current])
        }
    },
    logChanges: function (req, res, retrieved, item) {
        console.log("-------------------CHANGES TO "+ item.toUpperCase() +"-----------------") // Log the cahnges to the console/terminal.
        console.log("Added "+ retrieved.toLowerCase().charAt(0).toUpperCase() + retrieved.slice(1) + ", to "+ item + ".");
    },
}

var data = {
    checkForNewData: function(req, res){
        data.checkForNew(req, res, "sector"); // Check for new sectors, when form is posted.
        data.checkForNew(req, res, "branch"); // Check for new branches, when form is posted.
        data.checkForNew(req, res, "tags"); // Check for new tags, when form is posted.
    },
    isInArray: function(value, array) {
        return array.indexOf(value) > -1;   // Check the corresponding array, to see if there is already a item, that has the same value.
    },
    checkForNew:function(req ,res, item){
            var retrieved = req.body[item][req.body[item].length -1]
            if (retrieved !== undefined && retrieved !== ''){   // Checks if the New input field is NOT undefined or empty.
                if (!(data.isInArray((retrieved.toLowerCase().charAt(0).toUpperCase() + retrieved.toLowerCase().slice(1)), filters[item])) && req.body[item].length > 1){   // Check if the new value is already in the corresponding array, or not.
                    filters[item].push(retrieved.toLowerCase().charAt(0).toUpperCase() + retrieved.slice(1)); // Take the userinput, change it all to lowercase and change only the first letter, to a uppercase.
                    log.logChanges(req, res, retrieved, item);  //Log the new form data to the console/terminal.
                }
            }
        },
};
//---------------------------------------------------


module.exports = {router: router, filters: filters};
