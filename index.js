var express = require('express');
var app = express();
const numberOfFiles = require('./main');

app.get('/', function (req, res) {
    var num = numberOfFiles();
    var msg = 'Hello World ! Totally '+ num+ ' files now!';
    res.send(msg);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});