const express = require("express"),
      router  = express.Router(),
      Bike    = require('../../../models/bikes/bike')

    router.get("/", (req, res) => {
       Bike.find({bikeType: 'Track/Urban'}, function(err, tUBikes){
           if(err){
            console.log(err);
           } else {
            res.render('bikes/trackUrban/trackUrban', {tUBikes:tUBikes});
           }
       });
    });



      module.exports = router;
