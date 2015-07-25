var express = require('express');
var engine = require('consolidate');

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

app.listen(app.get('port'), function(){
	console.log('Express server listening on port' + app.get('port'));
});

