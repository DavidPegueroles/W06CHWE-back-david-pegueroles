const express = require("express");
const {
  getRobots,
  getARobot,
  deleteRobot,
  createRobot,
} = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", getRobots);
router.get("/:idRobot", getARobot);
router.delete("/delete/:idRobot", deleteRobot);
router.post("/create", createRobot);

module.exports = router;
