var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Banana API!');
});
app.get('/banana', function (req, res) {
  res.send('Banana API! path /banana argoCD');
});
app.listen(6012, function () {
  console.log('Example app listening on port 6012!');
});
