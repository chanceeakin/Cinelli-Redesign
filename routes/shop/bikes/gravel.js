const express = require("express"),
      router  = express.Router();

    router.get("/", (req, res) => {
        res.render("bikes/gravel/gravel");
    });


      module.exports = router