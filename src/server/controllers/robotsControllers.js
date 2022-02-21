const Robot = require("../../database/models/Robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.status(200);
  res.json({ robots });
};

const getARobot = async (req, res) => {
  const robot = await Robot.findById(req.params.idRobot);
  res.status(200);
  res.json({ robot });
};

const deleteRobot = async (req, res) => {
  const robot = await Robot.findByIdAndDelete(req.params.idRobot);
  res.status(202);
  res.json({ robot });
};

const createRobot = async (req, res) => {
  const robot = req.body;
  const newRobot = await Robot.create(robot);
  res.status(201);
  res.json(newRobot);
};

module.exports = { getRobots, getARobot, deleteRobot, createRobot };
