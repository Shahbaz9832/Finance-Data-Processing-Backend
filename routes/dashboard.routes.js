const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth.middleware");
const dashboardController = require("../controllers/dashboard.controller");

router.get("/", verifyToken, dashboardController.getSummary);

module.exports = router;