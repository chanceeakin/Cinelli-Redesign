var express = require("express"),
    router = express.Router();


router.get("/", function(req, res){
    res.render("bikes/road/road");
})



module.exports = router;