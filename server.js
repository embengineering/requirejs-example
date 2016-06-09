var colors = require('colors');
var express = require('express');
var app = express();
var dir = process.env.OPTIMIZE
  ? '/public'
  : '/app';
var env = process.env.FULL
  ? '/full-project'
  : '/single-file';
var port = 8080;

console.log(('Env:'.underline + ' ' + env).green);
console.log(('Dir:'.underline + ' ' + dir).green);


// use 'express' to serve static files
app.use(express.static(__dirname + env + dir));

app.listen(port, function() {
  console.log('Application listening on port ' + port);
});
