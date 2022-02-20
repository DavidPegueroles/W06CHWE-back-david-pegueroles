const express = require("express");
const { getRobots, getARobot } = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", getRobots);
router.get("/:idRobot", getARobot);

module.exports = router;
