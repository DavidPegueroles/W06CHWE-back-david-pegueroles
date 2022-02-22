const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { notFoundError, generalError } = require("./middlewares/errors");
const robotsRouter = require("./routers/robotsRouter");
const usersRouter = require("./routers/usersRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/user", usersRouter);
app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
