// IMPORT DEPENDENCIES
// =========================================
const express = require("express");
const session = require("express-session");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const COOKIEAGE = 1000 * 60 * 60 * 24 * 30 * 6;
const db = require("./models");

//Configure express app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//use the session to keep track of individual users to tie to "saved" jobs
// access session id by doing: req.sessionID
app.use(
  session({
    genid: function (req) {
      return genuuid(); // use UUIDs for session IDs
    },
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: COOKIEAGE },
  })
);

// ROUTES
// =================================================================
require("./routes/html-routes.js")(app);
require("./routes/savedjob-routes.js")(app);


// START
// =================================================================
// sync the db then start listening to port
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
