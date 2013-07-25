var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var fileStream = fs.readFileSync(index.html);
    var indexString = fileStream.toString();
    response.send(indexString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
