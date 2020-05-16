// to render our handlebar pages
const db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/savedjobs", async function(req, res) {
    const jobLists = await db.SavedJob.findAll({ include: db.Todo });
    res.render("savedjobs", jobLists);
  });
};
