//to handle the api calls to our db for our saved jobs and their todos
// Requiring our models
const db = require("../models");

module.exports = function (app) {
  app.post("/api/savedjobs", function (req, res) {
    db.SavedJob.create({
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      location: req.body.location,
      company: req.body.company,
      type: req.body.type,
      userid: req.sessionID,
    }).then(function (dbSavedJob) {
      res.json(dbSavedJob);
    });
  });

  app.put("/api/savedjobs", function (req, res) {
    db.SavedJob.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then(function (dbSavedJob) {
      res.json(dbSavedJob);
    });
  });

  app.delete("/api/savedjobs", function (req, res) {
    db.SavedJob.destroy(req.body, {
      where: {
        id: req.body.id,
      },
    }).then(function (dbSavedJob) {
      res.json(dbSavedJob);
    });
  });
};