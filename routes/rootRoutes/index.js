var express     = require("express"),
    router      = express.Router();

    //Home Root Route
    router.get("/", function(req, res){
        res.render("landings/mainLanding");
    });
   



    
    
    
    
    
    
    
    
    // export the page
    module.exports = router;