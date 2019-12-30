const express = require("express");
const router = express.Router();

//@router    POST api/users
//@desc      Register user
//@access    Public
router.post("/", (req, res) => {
  console.log(req.body);

  res.json({ msg: "User route" });
});

module.exports = router;
