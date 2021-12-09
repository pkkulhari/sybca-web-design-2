var fs = require('fs');

var data = "Hello World!"

fs.writeFile('sample.txt', data,
  function (err) {
    if (err) throw err;
    console.log("Data is written to file successfully.")
  });