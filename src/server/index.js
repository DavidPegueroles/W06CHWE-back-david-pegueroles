const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");
const debug = require("debug")("robots:server");

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

module.exports = deployServer;
