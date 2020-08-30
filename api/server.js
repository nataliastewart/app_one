const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//routers
const server = express();

//middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "started" });
});

module.exports = server;
