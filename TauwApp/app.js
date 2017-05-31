var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index').router;
var users = require('./routes/users').router;
var form = require('./routes/form').router;

var app = express();

//  Global selectors
// Main filter options
var test = "hallo";

var tester = {
    sector : ["landelijk", "stedelijk", "industrie"],
    branch : ["bodem", "afval", "grondstoffen", "ecologie", "water", "inspectie", "waterbodem", "infrastructuur"],
    tags : ["Chemisch", "3D model", "Volume bepaling", "Fysisch"],
    level : ["Bodemlucht", "Maaiveld", "Textruur", "Lutum", "Organisch stof", "Metalen", "PAK", "PCB", "Bodemvreemde materialen", "Onderscheidt in chemische verbindingen"],
    scale : ["Handmatig", "Lokaal", "Regionaal", "Provinciaal", "Landelijk", "Internationaal", "n.v.t"],
    resolution: [],
    accuracy: [],
    interval : [],
    duration : [],
    innovatie : [],
    cost : [],
    shortSummary : [],
    longSummary : [],
    referenceProject : [],
};


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/form', form);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = {app: app, test: test, tester: tester}
