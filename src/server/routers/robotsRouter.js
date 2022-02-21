const express = require("express");
const {
  getRobots,
  getARobot,
  deleteRobot,
  createRobot,
} = require("../controllers/robotsControllers");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", getRobots);
router.get("/:idRobot", getARobot);
router.delete("/delete/:idRobot", auth, deleteRobot);
router.post("/create", createRobot);

module.exports = router;
