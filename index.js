var express = require('express');
var app = express();
var numberOfFiles = require('./main');

app.get('/', function (req, res) {
    numberOfFiles().then(function(rows) {
		var msg = 'Hello World ! Totally '+ rows + ' files now!';
		res.send(msg);
	});

});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});