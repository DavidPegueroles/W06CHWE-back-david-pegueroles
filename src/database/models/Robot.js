const { model, Schema } = require("mongoose");

const validateStats = (stat) => stat <= 10 && stat >= 0;

const RobotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  characteristics: {
    velocity: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
      validate: validateStats,
    },
    resistance: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
      validate: validateStats,
    },
    creation_date: {
      type: Date,
      required: true,
    },
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
