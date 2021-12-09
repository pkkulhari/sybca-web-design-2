const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const readSteam = fs.createReadStream("index.html");
    readSteam.pipe(res);
  }

  if (req.url == "/movies") {
    res.writeHead(200, { "Content-Type": "application/json" });

    fs.readFile("movies.json", function (err, data) {
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
console.log("Server is listening at port 8000");
