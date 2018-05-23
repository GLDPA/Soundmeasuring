var express = require('express');
var router = express.Router();

router.get('/GetAvgweek', function(req, res){

    console.log("korrekt ")

    res.render('GetAvgweek', {
      
        pageTitle: 'GetAvgweek',
        pageID: 'GetAvgweek'
      });
    
    });
      
module.exports = router;

