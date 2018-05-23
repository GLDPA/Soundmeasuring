var express = require('express');
var router = express.Router();

router.get('/average', function(req, res){


    res.render('average', {
      
        pageTitle: 'average',
        pageID: 'average'
      });
    
    });
      
module.exports = router;

