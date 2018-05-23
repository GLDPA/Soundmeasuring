var express = require('express');
var router = express.Router();

router.get('/GetAvgtoday', function(req, res){

    console.log("korrekt ")

    res.render('GetAvgtoday', {
      
        pageTitle: 'GetAvgtoday',
        pageID: 'GetAvgtoday'
      });
    
    });
      
module.exports = router;

