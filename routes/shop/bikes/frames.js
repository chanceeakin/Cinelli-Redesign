const express       = require("express"),
      router        = express.Router(),
      Bike          = require('../../../models/bikes/bike'),
      BikeFrame     = require('../../../models/bikes/frame')


//INDEX 
router.get("/", function(req, res){
    BikeFrame.find({}, function(err, allFrames){
       if(err){
           console.log(err);
       } else {
          res.render("bikes/frames/frames",{frames:allFrames});
       }
    });
});

router.get('/:id', function(req, res){
    BikeFrame.findById(req.params.id).populate().exec(function(err, foundFrame){
        if(err){
            console.log(err);
        } else {
            console.log(foundFrame);
            res.render('bikes/frames/show', {frame:foundFrame})
        }
    });
});


module.exports = router;


