module.exports = app => {
  const oxygen = require("../controlleri/oxygen.controller.js");

  var router = require("express").Router();

  router.post("/", oxygen.create);

  router.get("/", oxygen.findAll);

  router.get("/published", oxygen.findAllPublished);

  router.get("/:id", oxygen.findOne);

  router.put("/:id", oxygen.update);

  router.delete("/:id", oxygen.delete);

  router.delete("/", oxygen.deleteAll);

  app.use('/api/oxy', router);
    
    require("./routes/oxy.routes")(app);

const PORT = ...;
app.listen(...);
};