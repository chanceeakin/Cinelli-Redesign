var express = require("express"),
    router = express.Router();

router.get("/", function(req, res){
    res.render("landings/bikeLandings/roadLanding");
});



    module.exports = router