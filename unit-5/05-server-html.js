var http = require('http');
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var readStream = fs.createReadStream('index.html', 'UTF-8')
  readStream.pipe(res)
})

server.listen(8080);

console.log('Node server is listening to part 8080')