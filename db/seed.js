const db = require("../models");

db.SavedJob.bulkCreate([
    {
    title: "Full Stack Developer",
    description: "Work with Robert Half as a software developer",
    url: "https://www.google.com",
    userid: "001"
}, {
    title: "Junior Software Developer",
    description: "Start your career at Google",
    url: "https://www.google.com",
    userid: "002"
},
{
    title: "Senior Software Developer",
    description: "Grow your career at Google",
    url: "https://www.google.com",
    userid: "003"
},

]).then(function(dbSaveJobs){
    console.log (dbSaveJobs[0])
});

db.Todo.bulkCreate([
    {
        text:"Update Resume",
        SavedJobId: 1
    },
{
    text:"Create Cover Letter",
    SavedJobId: 1
}
]).then(function (dbTodo){
    console.log (dbTodo)   
});

db.Todo.bulkCreate([
    {
        text:"Update Resume",
        SavedJobId: 2
    },
{
    text:"Create Cover Letter",
    SavedJobId: 2
}
]).then(function (dbTodo){
    console.log (dbTodo)   
});


