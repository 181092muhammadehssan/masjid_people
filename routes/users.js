const express = require("express");
const router = express.Router();

router.get("/:pid", (req, res, next) => {
  console.log("Get request s woring");
  res.json({ message: "It is working" });
});

module.exports = router;
