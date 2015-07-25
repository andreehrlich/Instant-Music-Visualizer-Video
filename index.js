var express = require('express');
var engine = require('consolidate');
var sys = require('sys');
var exec = require('child_process').exec;
var bodyParser = require('body-parser');

var child;
var app = express();

app.set('port', 8080);
app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.engine('html', engine.mustache);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function(req, res) 
{
	res.render('index.html');
});

app.post('/download', function(req, res) 
{	
	var songURL = req.body.url;
	console.log(req.body);
	console.log(songURL);
	var cmd = 'cd public/songs && youtube-dl ' + songURL;
	exec(cmd, function(error, stdout, stderr) {
	  // command output is in stdout
	});
	res.send("Yay!");
});





app.listen(app.get('port'), function(){
	console.log('Express server listening on port' + app.get('port'));
});

