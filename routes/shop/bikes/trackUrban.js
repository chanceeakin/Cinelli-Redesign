const express = require("express"),
      router  = express.Router();

    router.get("/", (req, res) => {
        res.render("bikes/trackUrban/trackUrban");
    });



      module.exports = router;
