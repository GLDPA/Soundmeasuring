var express = require('express');
var reload = require('reload');
var app = express();
<<<<<<< HEAD
var dataFile = require('./data/data.json');
var path = require('path')
=======

>>>>>>> master

app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.locals.siteTitle = 'Temperature measurements';
app.locals.productName = 'Temperatures';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/get'));


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
