const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth.middleware");
const { allowRoles } = require("../middleware/role.middleware");

const recordController = require("../controllers/record.controller");

router.post("/", verifyToken, allowRoles("admin"), recordController.createRecord);
router.get("/", verifyToken, recordController.getRecords);
router.put("/:id", verifyToken, allowRoles("admin"), recordController.updateRecord);
router.delete("/:id", verifyToken, allowRoles("admin"), recordController.deleteRecord);

module.exports = router;