var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var  fs=require("fs");
    var fileStream = fs.readFileSync('index.html');
    var indexString = fileStream.toString();
    response.send(indexString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
