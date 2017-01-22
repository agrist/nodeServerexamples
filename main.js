const http = require('http');

const hostname = '127.0.0.1';
const port = 8090;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! We are in NodeJs server start page! \n  Lets go!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Started running the first example`);
});
