var express = require('express');
var app = express();
const hostname = '127.0.0.1',
 port = 8090;


app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/html/" + "simpleform.htm" );
});

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name,
      age: 123
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

var server = app.listen(port, function () {

   console.log("Example app listening at http://%s:%s", hostname, port);

});
