const db = require("../models");

db.SavedJob.bulkCreate([
  {
    title: "Full Stack Developer",
    description: "Work with Robert Half as a software developer",
    url: "https://www.google.com",
    location: "New York, NY",
    company: "Robert Half",
    type: "Part-Time",
    userid: "001",
  },
  {
    title: "Software engineer",
    description: "Work with Google as a software engineer",
    url: "https://www.google.com",
    location: "New York, NY",
    company: "Google",
    type: "Full-Time",
    userid: "001",
  },
  {
    title: "Junior Software Developer",
    description: "Start your career at Google",
    url: "https://www.google.com",
    location: "San Fran, CA",
    company: "Google",
    type: "Full-Time",
    userid: "002",
  },
  {
    title: "Senior Software Developer",
    description: "Grow your career at Amazon",
    url: "https://www.google.com",
    location: "Seattle, WA",
    company: "Amazon",
    type: "Full-Time",
    userid: "003",
  },
]).then(function (dbSaveJobs) {
  console.log(dbSaveJobs[0]);
}).catch(function(err){
  console.error(err);
});

db.Todo.bulkCreate([
  {
    text: "Update Resume",
    SavedJobId: 1,
  },
  {
    text: "Create Cover Letter",
    SavedJobId: 1,
  },
]).then(function (dbTodo) {
  console.log(dbTodo);
}).catch(function(err){
  console.error(err);
});

db.Todo.bulkCreate([
  {
    text: "Update Resume 1",
    SavedJobId: 3,
  },
  {
    text: "Create Cover Letter 2",
    SavedJobId: 3,
  },
]).then(function (dbTodo) {
  console.log(dbTodo);
}).catch(function(err){
  console.error(err);
});
