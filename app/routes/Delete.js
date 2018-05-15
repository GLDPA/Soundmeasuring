var express = require('express');
var router = express.Router();

router.get('/Delete', function(req, res) {
    
    

    res.render('delete', {
      
      pageTitle: 'Delete',
      pageID: 'delete'
    });
  
  });
    
  module.exports = router;