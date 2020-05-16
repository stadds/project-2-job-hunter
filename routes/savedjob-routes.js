//to handle the api calls to our db for our saved jobs and their todos
// Requiring our models
const db = require("../models");

module.exports = function (app) {
    app.post("/api/savedjobs", function (req, res) {
        db.SavedJob.create({
            title: req.body.title,
            description: req.body.description,
            url: req.body.url,
            userid: req.sessionID
        }).then(function (dbSavedJob) {
            res.json(dbSavedJob)
        });
    });
};