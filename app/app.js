var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');
var path = require('path')

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.locals.siteTitle = 'Noise level supervisor';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index'));


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
