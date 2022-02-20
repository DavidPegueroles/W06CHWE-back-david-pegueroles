const express = require("express");
const {
  getRobots,
  getARobot,
  deleteRobot,
} = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", getRobots);
router.get("/:idRobot", getARobot);
router.delete("/delete/:idRobot", deleteRobot);

module.exports = router;
