var express = require('express');
var router = express.Router();

router.get('/compare', function(req, res){


    res.render('compare', {
      
        pageTitle: 'compare',
        pageID: 'compare'
      });
    
    });
      
module.exports = router;

