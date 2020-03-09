const express = require("express"),
      router  = express.Router();

    router.get("/", (req, res) => {
        res.render("landings/componentsLanding");
    });



      module.exports = router;