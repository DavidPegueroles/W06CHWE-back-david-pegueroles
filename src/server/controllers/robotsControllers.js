const Robot = require("../../database/models/Robot");

const getRobots = async (req, res, next) => {
  try {
    const robots = await Robot.find();
    res.status(200).json({ robots });
  } catch (error) {
    next(error);
  }
};

const getARobot = async (req, res, next) => {
  const id = req.params.idRobot;

  try {
    const robot = await Robot.findById(id);

    if (robot) {
      res.status(200).json({ robot });
    } else {
      const error = new Error("Robot does not exist.");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

const deleteRobot = async (req, res) => {
  const robot = await Robot.findByIdAndDelete(req.params.idRobot);
  res.status(200);
  res.json({ robot });
};

const createRobot = async (req, res) => {
  const robot = req.body;
  const newRobot = await Robot.create(robot);
  res.status(201);
  res.json(newRobot);
};

module.exports = { getRobots, getARobot, deleteRobot, createRobot };
