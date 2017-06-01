var express = require('express');
var router = express.Router();
var appJS = require('../app.js');
var filters = appJS.filters;


//  Global selectors
var filters = {
    sector : ["landelijk", "stedelijk", "industrie"],
    branch : ["bodem", "afval", "grondstoffen", "ecologie", "water", "inspectie", "waterbodem", "infrastructuur"],
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


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('form', { title: 'Formulier', filters: filters});
});

router.post('/', function(req, res){
    data.checkForNewData(req, res);
console.log("I have send the data")
    // console.log("---------Formulier------------")
    // console.log("---------Contact informatie------------")
    // console.log(req.body.contactpersoon)
    // console.log(req.body.email)
    // console.log(req.body.mobile)
    // console.log(req.body.profielfoto)
    //
    // console.log("---------Categorieën------------")
    // console.log(req.body.sector)
    //
    // console.log("---------Vakgebied (waarin)------------")
    // console.log(req.body.branch)
    // console.log(req.body.tags)
    // console.log(req.body.level)
    //
    // console.log("---------Details------------")
    // console.log(req.body.scale)
    // console.log(req.body.resolution)
    // console.log(req.body.accuracy)
    // console.log(req.body.interval)
    // console.log(req.body.duration)
    // console.log(req.body.innovation)
    // console.log(req.body.costs)
    //
    // console.log("---------Beschrijving------------")
    // console.log(req.body.samenvatting)
    // console.log(req.body.referentieproject)
    //
    // console.log("--------------------------------")
    // console.log("--------------------------------")

    res.render('form', { title: 'Formulier', filters: filters });
});


var data = {
    checkForNewData: function(req, res){
        data.checkForNewSector(req, res);
        data.checkForNewBranch(req, res);
        data.checkForNewTags(req, res);
    },
    checkForNewSector: function (req, res) {
        if (!(data.isInArray(req.body.sector[req.body.sector.length -1], filters.sector)) && req.body.sector.length > 1){
            if (req.body.sector[req.body.sector.length -1] !== "undefined" && req.body.sector[req.body.sector.length -1] !==""){
                filters.sector.push(req.body.sector[req.body.sector.length -1]);
                console.log("-------------------SECTOR-----------------")
                console.log(filters.sector)
                console.log("------------------------------------------")
            }
        }
    },
    checkForNewBranch: function (req, res) {
        if (!(data.isInArray(req.body.branch[req.body.branch.length -1], filters.branch)) && req.body.branch.length > 1){
            if (req.body.branch[req.body.branch.length -1] !== "undefined" && req.body.branch[req.body.branch.length -1] !== ""){
                filters.branch.push(req.body.branch[req.body.branch.length -1]);
                console.log("-------------------BRANCH-----------------")
                console.log(filters.branch)
                console.log("------------------------------------------")
            }
        }
    },
    checkForNewTags: function (req, res) {
        if (!(data.isInArray(req.body.tags[req.body.tags.length -1], filters.tags)) && req.body.tags.length > 1){
            if (req.body.tags[req.body.tags.length -1] !== "undefined" && req.body.tags[req.body.tags.length -1] !== ""){
                filters.tags.push(req.body.tags[req.body.tags.length -1]);
                console.log("-------------------TAGS-----------------")
                console.log(filters.tags)
                console.log("------------------------------------------")
            }
        }
    },
    isInArray: function(value, array) {
        return array.indexOf(value) > -1;
    },
};


// checkForDoubleWords: function(listAll){ // Function, that checks if there are new words.
//     if (index.params.length > wordList.length){ // the "index.params" values are from the userinput from the index.js script
//         for (var i = 0; i < index.params.length; i++) {
//             if (listAll.includes(index.params[i].toLowerCase()) == false){
//                 wordList.push(index.params[i]);
//             }
//         }
//     };
//     data.generateWords(listAll);
// },







module.exports = {router: router, filters: filters};
