var express = require('express');
var router = express.Router();

router.get('/get', function(req, res) {
    
    

    res.render('get', {
      
      pageTitle: 'Get',
      pageID: 'get'
    });
  
  });
    
  module.exports = router;