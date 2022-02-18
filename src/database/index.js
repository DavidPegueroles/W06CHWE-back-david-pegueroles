const debug = require("debug")("robots:database");
const chalk = require("chalk");
const mongoose = require("mongoose");

const databaseConnection = (url) =>
  new Promise((resolve, reject) => {
    mongoose.connect(url, (error) => {
      if (error) {
        reject(new Error("Couldn't connect to the database"));
      }
      debug(chalk.green("Connected to the database"));
      resolve();
    });
  });

module.exports = databaseConnection;
