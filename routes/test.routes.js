const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth.middleware");

router.get("/test", verifyToken, (req, res) => {
  res.json({ message: "OK", user: req.user });
});

module.exports = router;