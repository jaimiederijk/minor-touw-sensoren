var express = require('express');
var router = express.Router();


router.get('/:sensorName', function(req, res, next) {

  res.render('detail', { title: req.params.sensorName});
});

module.exports = {router: router};
