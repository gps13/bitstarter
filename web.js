var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
//var app = express();

var app = express.createServer(express.logger());
var buf = fs.readFileSync(htmlfile);

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
