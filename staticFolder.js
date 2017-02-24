var express = require('express');
var app = express();
const hostname = '127.0.0.1';
const port = 8090;


app.use(express.static('staticDirectory'));//http://127.0.0.1:8090/index.png
//http://127.0.0.1:8090/sub/test.jpg
app.use(express.static('nodeCode'));// http://127.0.0.1:8090/02_callback_code/code/callback.html

app.get('/', function(req, res){
console.log('called get');
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World! We are in NodeJs server start page! \n  Lets go!');
});

app.get('/test', function(req, res){
console.log('test get');
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end(' Lets go!');
});

app.listen(port, hostname, function(err){
   console.log("Started static resource server at http://%s:%s", hostname, port);
});
