const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth.middleware");
const { allowRoles } = require("../middleware/role.middleware");

const userController = require("../controllers/user.controller");

// Only admin can manage users
router.get("/", verifyToken, allowRoles("admin"), userController.getUsers);

router.patch("/:id/role", verifyToken, allowRoles("admin"), userController.updateRole);

router.patch("/:id/status", verifyToken, allowRoles("admin"), userController.toggleStatus);

module.exports = router;
