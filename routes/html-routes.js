// to render our handlebar pages
const db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    let hbsObject = {};
    hbsObject.title = "Search Jobs";
    hbsObject.navs = [{ url: "/savedjobs", name: "Saved Jobs" }];
    res.render("index", hbsObject);
  });

  app.get("/savedjobs", async function (req, res) {
    let hbsObject = {};
    hbsObject.title = "Saved Job";
    hbsObject.navs = [{ url: "/", name: "Search Jobs" }];

    let results = await db.SavedJob.findAll({
      where: { userid: req.sessionID },
      include: [
        {
          model: db.Todo,
          required: false,
        },
      ],
    });

    let jsonResults = JSON.stringify(results);

    hbsObject.jobLists = JSON.parse(jsonResults);

    res.render("savedjobs", hbsObject);
  });
};
