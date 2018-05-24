var express = require('express');
var reload = require('reload');
var app = express();


app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Temperature measurements';
app.locals.productName = 'Temperatures';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/get'));
app.use(require('./routes/Delete'));
app.use(require('./routes/average'));
<<<<<<< HEAD
app.use(require('./routes/GetAvgtoday'));
app.use(require('./routes/GetAvgweek'));
=======
app.use(require('./routes/compare'));
app.use(require('./routes/getAverageToday'));
app.use(require('./routes/getAverageWeek'));

>>>>>>> master


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
