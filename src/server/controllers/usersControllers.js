const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../database/models/User");

const createUser = async (req, res) => {
  const user = req.body;
  const newUser = await User.create(user);
  res.status(201);
  res.json(newUser);
};

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    const error = new Error("Username does not exist");
    error.code = 401;
    next(error);
  } else {
    const rightPassword = bcrypt.compare(password, user.password);
    if (!rightPassword) {
      const error = new Error("Password incorrect");
      error.code = 401;
      next(error);
    }
    const userData = {
      username: user.username,
      id: user.id,
    };
    const token = jwt.sign(userData, process.env.JWT_TOKEN, {
      expiresIn: "7d",
    });
    res.json({ token });
  }
};

module.exports = { createUser, loginUser };
