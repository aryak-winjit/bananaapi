require('dotenv').config();
var express = require('express');
var app = express();
var env_data_owner = process.env.OWNER;
app.get('/', function (req, res) {
  res.send('Banana API!');
});
app.get('/banana', function (req, res) {
  res.send('/banana ' + process.env.VERSION + " " + process.env.DB_USER + " " + process.env.DB_PASS);
});
app.listen(6012, function () {
  console.log('Example app listening on port 6012!' + process.env.VERSION + " " + process.env.DB_USER + " " + process.env.DB_PASS);
});
