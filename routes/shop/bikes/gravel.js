const express = require("express"),
      router  = express.Router(),
      Bike    = require('../../../models/bikes/bike')

    router.get("/", (req, res) => {
        Bike.find({bikeType: 'Gravel'}, function(err, gravelBikes){
            if(err){
                console.log(err)
            } else {
                res.render('bikes/gravel/gravel', {gravelBikes:gravelBikes})
            }
        });
    });


      module.exports = router