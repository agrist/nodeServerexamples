var fs = require("fs");//module for file system procedures - to act upon files
var express = require("express"); // node module for REST API fast creation
var app = express();
const hostname = '127.0.0.1', port = 8090;

var cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies



//http://127.0.0.1:8090/listusers
app.get('/listusers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

//http://127.0.0.1:8090/seetext
app.get('/seetext', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

app.post("/seeSecuretext", function(req, res) {
    var accountMock = {
        "username": "dwarf5",
        "password": "1234"
    };
    console.log(req.body);
    if(req.body.username === undefined) {
        return res.send({"status": "error", "message": "missing username"});
    } else if(req.body.username != accountMock.username) {
        return res.send({"status": "error", "message": "wrong username"});
    } else {
      fs.readFile( __dirname + "/" + "textfile.json", 'utf8', function (err, data) {
        //see securedtext.json  file content
          res.send( JSON.stringify(data));
    });
  }
});

app.post('/pushtext', function (req, res) {
   // First read existing data.
   fs.appendFile('textfile.json', req.params.text, (err) => {
     if (err) throw err;
     console.log('The "data to append" was appended to file!');
     console.log(req.params.text);
          console.log(req.body);
               console.log(req.query);
     res.send( JSON.stringify("simple_sobject: 123"));
   });

//   fs.readFile( __dirname + "/" + "textfile.json", 'utf8', function (err, data) {
//       addition = req.query.text;
//       data = data.concat(addition);
//       console.log( data );
//       res.send( JSON.stringify("simple_sobject: 123"));
//   });

/*
fs.readFile('/path/to/file.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    var obj = JSON.parse(data);
});
*/
})
app.get('/gettext', function(req,res ){

  fs.readFile(__dirname + "/" + "textfile.json", 'utf8', function (err, data) {
        if (err) throw err;
        res.send(data);
        }
    );
});


// START THE SERVER
// ============================================================
var server = app.listen(port,hostname, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", hostname, port);
});
//the good practice -- if anything goes wrong destroy the socket imdiatley
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
