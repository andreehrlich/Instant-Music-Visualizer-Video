var express = require('express');
var engine = require('consolidate');
var sys = require('sys');
var exec = require('child_process').exec;

var child;
var app = express();

app.set('port', 8080);
app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.engine('html', engine.mustache);
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) 
{
	res.render('index.html');
});

app.get('/download', function(req, res) 
{	
	//var songURL = req.body.url;
	var songURL = "https://soundcloud.com/tink_g/tink-i-like-prod-c-sick";
	console.log(req);
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

