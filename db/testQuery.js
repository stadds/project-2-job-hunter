const db = require("../models");

db.SavedJob.findAll({include: db.Todo}).then(function(results){
    console.log (results)
    });
    