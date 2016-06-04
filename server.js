var express = require('express');
var app = express();

// use 'express' to serve static files
app.use(express.static(__dirname + '/app'));

app.listen(8080, function() {
  console.log('Application listening on port 8080');
});
