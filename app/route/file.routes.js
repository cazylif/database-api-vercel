module.exports = app => {
  const file_controller = require("../controllers/file.controller");
  var router = require("express").Router();
  router.post("/upload", file_controller.uploadController);
  router.get("/:name", file_controller.download);
  console.log("file router");
  app.use("/api/file", router);
};