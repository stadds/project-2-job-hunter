// for the /saved_jobs page

// get and render to dos for each saved job, render new todos to page
function savedtoDo() {
  event.preventDefault();
  console.log("enter-todo");
  const $card = $(this).closest(".card");
  const jobId = $card.data("savedid");
  const userInput = $(this).children("input").val().trim();
  if (userInput === "") {
    return;
  }

  const toDo = {
    text: userInput,
    complete: false,
    SavedJobId: jobId,
  };

  console.log(toDo);
  $.post("/api/todos", toDo).then(function (data) {
    console.log(data);
    location.reload();
  });
}
function completeTodo() {
  console.log("btn-complete");
  const $toDo = $(this).closest(".list-group-item");
  const toDoid = $toDo.data("todoid");
  console.log(toDoid);
  const upDate = {
    complete: true,
  };
  $.ajax({
    url: "/api/todos/" + toDoid,
    type: "PUT",
    data: upDate,
  }).then(function (data) {
    console.log(data);
    location.reload();
  });
}

$(document).ready(function () {});
$(document).on("submit", ".enter-todo", savedtoDo);
$(document).on("click", ".btn-complete", completeTodo);
