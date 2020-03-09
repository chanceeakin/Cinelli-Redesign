const express = require("express"),
      router  = express.Router();

    router.get("/", (req, res) => {
        res.render("apparel/apparel");
    });

      module.exports = router;