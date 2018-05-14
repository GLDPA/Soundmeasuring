var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var data = req.app.get('appData');

  
    
  
    res.render('index', {
      pageTitle: 'Home',
      pageID: 'home'
    });
  
  });
    
  module.exports = router;
  