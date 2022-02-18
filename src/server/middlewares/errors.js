const debug = require("debug")("robots:server:middlewares:errors");
const chalk = require("chalk");

const notFoundError = (req, res) => {
  res.status(404).json({ error: "Resource not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug(chalk.bgWhite.red(`FATAL!! Error: ${err.message}`));
  res.status(500).json({
    error:
      "You just killed all the robots. Please come again later in a hope of finding what you wanted :(",
  });
};

module.exports = { notFoundError, generalError };
