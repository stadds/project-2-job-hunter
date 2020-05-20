//to hold the 3rd party search api call
function renderHTML(jobsData) {
  $("#search-results").empty();
  console.log(jobsData);

  for (let i = 0; i < jobsData.length; i++) {
    let $col = $("<div>").addClass("column");
    let $callout = $("<div>").addClass("callout");
    $col.append($callout);

    let $title = $("<p>").addClass("lead job-title").text(jobsData[i].title);
    $callout.append($title);

    let $company = $("<p>")
      .addClass("subheader job-comp")
      .text(jobsData[i].company)
      .append("<hr>");
    $callout.append($company);

    let $type = $("<p>").addClass("job-type").text(jobsData[i].type);
    $callout.append($type);

    let $loc = $("<p>").addClass("job-loc").text(jobsData[i].location);
    $callout.append($loc);

    let tmpDesc = jobsData[i].description.replace(/<[^>]*>/g, "");
    let $desc = $("<p>").addClass("job-desc").text(tmpDesc);
    $callout.append($desc);

    let $url = $("<a>")
      .addClass("git-url")
      .attr({ href: jobsData[i].url, target: "_blank" })
      .text("Apply Here")
      .append("<br>");
    $callout.append($url);
    $callout.append(
      "<button type='button' class='button save-btn' style='margin-top:.5em;'>Save Job!</button>"
    );

    $("#search-results").append($col);
  }
}
function savedaJob() {
  //event.preventDefault();
  console.log("save-btn");
  console.log($(this));
  let jobsData = {
    title: $(this).siblings(".job-title").text().trim(),
    description: $(this).siblings(".job-desc").text().trim(),
    url: $(this).siblings(".git-url").attr("href").trim(),
    location: $(this).siblings(".job-loc").text().trim(),
    company: $(this).siblings(".job-comp").text().trim(),
    type: $(this).siblings(".job-type").text().trim(),
  };
  console.log(jobsData);

  $.post("/api/savedjobs", jobsData).then(function (data) {
    console.log(data);
  });
  $(this).addClass("disabled").text("Saved");
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
$(document).on("click", ".save-btn", savedaJob);

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
