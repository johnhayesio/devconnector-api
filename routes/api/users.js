const express = require("express");
const router = express.Router();

//@router    POST api/users
//@desc      Register user
//@access    Public
router.get("/", (req, res) => {
  console.log(req.body);

  res.json({ msg: "User route" });
});

module.exports = router;
