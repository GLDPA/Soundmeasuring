var express = require('express');
var router = express.Router();

router.get('/GetAllMeasurments/', function(req, res) {
    alert("Data: " + data + "\nStatus: " + status)
    var data = req.app.get('appData');

  
    
  
    res.render('index', {
      pageTitle: 'Home',
      pageID: 'home'
    });
  
  });
    
  module.exports = router;