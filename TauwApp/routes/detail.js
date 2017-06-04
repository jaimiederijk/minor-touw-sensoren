var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('detail', { title: 'XRF'});
});

module.exports = {router: router};
