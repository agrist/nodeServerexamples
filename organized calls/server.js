var express = require('express'),
mongoose = require('mongoose'),
mongoUrl = 'mongodb://localhost/forshow';
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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
