const express = require('express');
const app = express();
const path    = require("path");
require('./llstatic.js')();

// app.use('/static.js', express.static('public'));
app.get('/', function(req, res) {
  res.send('Hello world');
});
app.use('/scripts', express.static(__dirname));
app.get('/generateRandomLL', function (req, res) {
  var result = new ListNode(10);
  for (var i = 0; i < 10; i++) {
    result.addValue(i + Math.random() * 1);
  }
  res.send(result);
});
app.get('/index', function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8785, function(){
  console.log('listening at 8785');
});
