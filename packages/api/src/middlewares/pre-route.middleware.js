const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const formidable = require("express-formidable");

module.exports = (app) => {
  app.use(cors());
  app.use(helmet());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(formidable());
  app.use(express.static("/public"));
  app.use(express.urlencoded({ extended: false }));
  app.use("/uploads", express.static("/uploads"));

  return app;
};
