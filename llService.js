const express = require('express');
const app = express();
const path = require("path");
const sys = require('sys');

var jslitmus = require('./jslitmus.js');
require('./llstatic.js')();

var a = new Array();
var count = 0;
var lcount = 0;
jslitmus.test('Join 10K elements', function() {
    a.join(' ');
    count++;
});
// var result = new ListNode(10);
// jslitmus.test('Join linklist', function() {
//     for(var i=0; i<10; i++){
//       result.addValue(i);
//     }
//     // lcount++;
// });

// Log the test results
jslitmus.on('complete', function(test) {
    sys.log("Test result: " + test.toString());
    sys.log("Array length: " + a.length, count);
    // sys.log("LinkList length: " + result.length(), lcount);
});
jslitmus.on('start', function(test) {
  sys.log("Name: " + test.name + " Run time: " + test.count);
});

// Run it!
jslitmus.runAll();
console.log(jslitmus.getGoogleChart());
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
