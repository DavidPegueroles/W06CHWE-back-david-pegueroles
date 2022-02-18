const debug = require("debug")("robots:server");
const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/errors");

const app = express();

const deployServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.green(`Server is up at http://localhost:${port}`));
      resolve();
    });

    server.on("error", (error) => {
      reject(new Error(`Error on server: ${error.message}`));
    });
  });

app.use(morgan("dev"));

app.use((req, res, next) => {
  debug(chalk.bgBlack.magenta(`A request has arrived to ${req.url}`));
  next();
});

app.use(notFoundError);
app.use(generalError);

module.exports = deployServer;
