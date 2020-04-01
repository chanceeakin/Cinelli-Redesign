const express = require("express"),
      router  = express.Router(),
      Bike    = require('../../../models/bikes/bike');


//INDEX 
router.get("/", function(req, res){
    Bike.find({bikeType: 'Road'}, function(err, roadBikes){
       if(err){
           console.log(err);
       } else {
          res.render("bikes/road/road",{roadBikes:roadBikes});
       }
    });
});


module.exports = router;



