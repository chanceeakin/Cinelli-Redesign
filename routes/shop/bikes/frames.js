const express = require("express"),
      router  = express.Router();

router.get("/", (req, res) => res.render("bikes/frames"));


module.exports = router;