// Autocomplete Search Function
function activatePlacesSearch(){
  var input = document.getElementById('search_term');
  var autocomplete = new google.maps.places.Autocomplete(input);
  }
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // $(".create-form").on("submit", function(event) {
  //   event.preventDefault();
  $("#wish").on("click", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#search_term")
        .val()
        .trim(),
      devoured: 0
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Added new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  $(".eatburger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("Burger devoured", devouredState);
      // Reload the page to get the updated list
      location.reload();
    });
  });
  $(".trashburger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(location.reload());
  });
});
/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
 
$("#search").click(function(event) {
  $("#infoDiv").empty();
  console.log($("#select").attr("id"));
  $('#results').addClass('show');
  event.preventDefault();
  var entry = $("#search_term").val().split(",")[0].split(" ");
  var result = [];
    for (var i = 0; i < entry.length; i++) {
      var value = entry[i].charAt(0).toUpperCase() + entry[i].slice(1)
      result.push(value);
      console.log(value);
    }; 
  var city = result.join("_");
  // .split(",")[0];
    // console.log(entry);
  // var city = entry.charAt(0).toUpperCase() + entry.slice(1);
  // console.log(city)
  if (city) {
    var queryURL = "https://www.triposo.com/api/20200405/poi.json?location_id="+city+"&count=10&fields=id,name,images,score,snippet&account=ORID4DVT&fields=all&token=9mzqr3x3hr2juisyaz7mfqmsezfooz85";
  }
/**
 * takes API data (JSON/object) and turns it into elements on the page
 * @param {object} TripData - object containing API data
 */
$.ajax({
   url: queryURL,
   method: "GET",
   dataType: "json"
 }).then(function(json) {
     console.log(json);
     console.log(json.results[0].snippet);
    //  console.log(json.response[0].snippet);
       var location = json.results[0].snippet;
       var imageURL = json.results[0].images[0].sizes.thumbnail.url;
      //  var snippet = $('<h3>').text(location);
       var d = $("<div>");
       var image = $("<img>").attr("src", imageURL);
       d.append(location);
       d.append(image);
       $("#infoDiv").append(d);
           
 });
});
// }).then(response => {
//   console.log(response);
// });