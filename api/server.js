const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//routers
const usersRouter = require("../users/users-router.js");

const server = express();

//middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//use routers
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "started" });
});

module.exports = server;
