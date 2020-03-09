const express = require("express"),
      router  = express.Router();

    router.get("/", (req, res) => {
        res.render("landings/bikeLandings/gravelLanding");
    });     
        



    
    
      module.exports = router