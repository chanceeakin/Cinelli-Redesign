var express = require("express"),
    router  = express.Router();

// Define escapeRegex function for search feature
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.get("/", function(req, res){
    if(req.query.search) {

    } else {
    res.render("bikes/allBikes");      
    }
});



// EXPORT THE PAGE
module.exports = router;