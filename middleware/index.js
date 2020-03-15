const Bike = require("../models/bike");

// all middleware goes here

const middlewareObj = {};

middlewareObj.checkBikeOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Bike.findById(req.params.id, function(err, foundBike){
            if(err){
                req.flash("error", "Bike not found");
                res.redirect("back");
            } else {
                // did user make the bike
                if(foundBike.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "you dont have permission");
                    res.redirect("back");
                }
            }
        });
    } else{
        req.flash("error", "you need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.isAdmin = function(req, res, next) {
    if(req.user.isAdmin){
        next();
    } else {
        req.flash('error', 'must be admin to do that');
        res.redirect('back');
    }
}
middlewareObj.isSafe = function(req, res, next){
    if(req.body.image.match(/^https:\/\/images\.unsplash\.com\/.*/)){
        next();
    } else {
        req.flash('error', 'only images from unsplash are allowed');
        res.redirect('back');
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}

module.exports = middlewareObj;