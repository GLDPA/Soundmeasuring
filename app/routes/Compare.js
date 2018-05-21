var express = require('express');
var router = express.Router();

router.get('/compare', function(req, res){

    console.log("korrekt ")

    res.render('compare', {
      
        pageTitle: 'compare',
        pageID: 'compare'
      });
    
    });
      
module.exports = router;

