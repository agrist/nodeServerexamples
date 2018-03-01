var express = require('express'),
mongoose = require('mongoose'),
mongoUrl = 'mongodb://localhost/forshow';
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var allowCrossDomain = function(req, res, next) {
    if(req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
    //res.header('Access-Control-Allow-Origin', 'localhost:3004');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(allowCrossDomain);


require('./models/painters');
require('./models/users');
require('./routes')(app);

mongoose.connect(mongoUrl);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUrl);
});


var server = app.listen(3004, function () {
  console.log('Listening on port 3004...');
});
