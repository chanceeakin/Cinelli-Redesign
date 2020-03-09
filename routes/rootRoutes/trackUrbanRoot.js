const express = require("express"),
      router  = express.Router();

router.get("/", (req, res) => {
    res.render("landings/bikeLandings/trackUrban");
});


      module.exports = router;