//to handle the api calls to our db for our saved job's todos
// Requiring our models
const db = require("../models");

module.exports = function (app) {
  app.post("/api/todos", function (req, res) {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete,
      SavedJobId: req.body.SavedJobId,
    }).then(function (dbTodo) {
      res.json(dbTodo);
    });
  });

  app.put("/api/todos/:id", function (req, res) {
    db.Todo.update(
      {
        complete: req.body.complete,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(function (dbTodo) {
      res.json(dbTodo);
    });
  });

  app.delete("/api/todos", function (req, res) {
    db.Todo.destroy(req.body, {
      where: {
        id: req.body.id,
      },
    }).then(function (dbTodo) {
      res.json(dbTodo);
    });
  });
};
