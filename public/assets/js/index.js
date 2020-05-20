//to hold the 3rd party search api call
$(document).ready(function () {
  $(".search-jobs").on("submit", function (event) {
    event.preventDefault();
    console.log("here");
    let searchKeyword = $("#keywords").val().trim();
    let searchLocation = $("#location").val().trim();
    console.log(encodeURIComponent(searchKeyword));
    console.log(encodeURIComponent(searchLocation));
  });
});
