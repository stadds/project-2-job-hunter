//to hold the 3rd party search api call
function renderHTML(jobsData) {
$("#search-results").empty();

  for (let i = 0; i < jobsData.length; i++) {
    let $col = $("<div>").addClass("column");
    let $callout = $("div").addClass("callout");
    $col.append($callout);

    let $title = $("<p>").addClass("lead").text(jobsData[i].title);
    $callout.append($title);

    let $company = $("<p>")
      .addClass("subheader")
      .text(jobsData[i].company)
      .html("<hr>");
    $callout.append($company);

    let $type = $("<p>").text(jobsData[i].type);
    $callout.append($type);

    let $url = $("<a>")
      .attr({ href: jobsData[i].url, target: "_blank" })
      .text("Apply Here");
    $callout.append($url);
    $callout.append("<button type='button' class='button'> Save Job!</button>");

    $("#search-results").append($col);
  }
}
$(document).ready(function () {
  $(".search-jobs").on("submit", function (event) {
    event.preventDefault();
    console.log("here");
    let searchKeyword = encodeURIComponent($("#keywords").val().trim());
    let searchLocation = encodeURIComponent($("#location").val().trim());
    console.log(encodeURIComponent(searchKeyword));
    console.log(encodeURIComponent(searchLocation));
    $.ajax({
      url: `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchKeyword}&location=${searchLocation}&page=1`,
      method: "GET",
    }).then(renderHTML);
  });
});

// //
// <div class="column">
//     <div class="callout">
//       <p class="lead">Job Title</h2>
//       <p class="subheader">Company</p>
//       <hr>
//       <p>type</p>
//       <p>Location</p>
//       <p>Description</p>
//       <p>github url</p>
//       <button type="button" class="button">Save Job!</button>
//     </div>
//   </div>
