const Robot = require("../../database/models/Robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
};

const getARobot = async (req, res) => {
  const robot = await Robot.findById(req.params.idRobot);
  res.json({ robot });
};

module.exports = { getRobots, getARobot };
