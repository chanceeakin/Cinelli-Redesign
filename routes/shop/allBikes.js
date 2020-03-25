const express = require("express"),
      router  = express.Router();
      Bike    = require('../../models/bike')


//INDEX 
router.get("/", function(req, res){
    Bike.find({}, function(err, allBikes){
       if(err){
           console.log(err);
       } else {
          res.render("bikes/allBikes",{bikes:allBikes});
       }
    });
});

//CREATE 
router.post("/", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newBike = {name: name, image: image, description: description}
    Bike.create(newBike, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect("/shop/bikes");
        }
    });
});

//NEW 
router.get("/new", function(req, res){
   res.render("bikes/new"); 
});

// SHOW 
router.get("/:id", function(req, res){
    Bike.findById(req.params.id).populate().exec(function(err, foundBike){
        if(err){
            console.log(err);
        } else {
            console.log(foundBike);
            res.render("bikes/show", {bike: foundBike});
        }
    });
});

// EDIT
router.get("/:id/edit", function(req, res){
    Bike.findById(req.params.id, function(err, foundBike){
        res.render("bikes/edit", {bike: foundBike});
    });
});

// UPDATE 
router.put("/:id", function(req, res){
    Bike.findByIdAndUpdate(req.params.id, req.body.bike, function(err, updatedBike){
       if(err){
           res.redirect("/shop/bikes/");
       } else {
           res.redirect("/shop/bikes/" + req.params.id);
       }
    });
});

// DESTROY 
router.delete("/:id", function(req, res){
   Bike.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/shop/bikes");
      } else {
          res.redirect("/shop/bikes");
      }
   });
});


// EXPORT 
module.exports = router;