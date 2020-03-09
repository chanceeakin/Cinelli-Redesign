const express = require("express"),
      router  = express.Router();

    router.get("/", (req, res) => res.render("insideCinelli/insideCinelli"));

    module.exports = router;