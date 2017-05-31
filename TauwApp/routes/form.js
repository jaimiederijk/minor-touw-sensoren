var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Formulier' });
});

router.post('/', function(req, res){
    var appJS = require('../app.js');
    console.log("-----------------------------------")
    console.log(appJS.tester)
    console.log("-----------------------------------")
    
    // console.log("---------Formulier------------")
    // console.log("---------Contact informatie------------")
    // console.log(req.body.contactpersoon)
    // console.log(req.body.email)
    // console.log(req.body.mobile)
    // // console.log(req.body.profielfoto)
    //
    // console.log("---------Categorieën------------")
    // console.log(req.body.sector)
    //
    // console.log("---------Vakgebied (waarin)------------")
    // console.log(req.body.vakgebied)
    // console.log(req.body.categorie)
    // console.log(req.body.niveau)
    //
    // console.log("---------Details------------")
    // console.log(req.body.schaal)
    // console.log(req.body.resolutie)
    // console.log(req.body.nauwkeurigheid)
    // console.log(req.body.termijn)
    // console.log(req.body.tijdreeks)
    // console.log(req.body.innovatie)
    // console.log(req.body.kosten)
    //
    // console.log("---------Beschrijving------------")
    // console.log(req.body.samenvatting)
    // console.log(req.body.referentieproject)
    //
    // console.log("--------------------------------")
    // console.log("--------------------------------")

    res.render('form', { title: 'Formulier' });
});



module.exports = {router: router};
