const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  characteristics: {
    velocity: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    resistance: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    creation_date: {
      type: Date,
      required: true,
    },
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
