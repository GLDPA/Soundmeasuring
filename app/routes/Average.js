var express = require('express');
var router = express.Router();

router.get('/average', function(req, res){

    console.log("korrekt ")

    res.render('average', {
      
        pageTitle: 'average',
        pageID: 'average'
      });
    
    });
      
module.exports = router;

