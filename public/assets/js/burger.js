const locationForm = document.querySelector('location-form');

// Event Listener
$(function() {
  $("#run-search").on("click", function(event) {
    event.preventDefault();

  const location = document.querySelector('#search-term').value;

    console.log(location);
    console.log(event.target.value);
    })

  $.ajax({
    type: "GET",
    url: "https://www.triposo.com/api/20200405/location.json?location=${location}&account=JEM7ZTLR&fields=id,name,parent_id,country_id,snippet,coordinates,images&token=koerzthbb52l98zhhsdxhuovxhoouzi7"+location+"&callback=?",
    dataType: 'JSON',
    success: function(data){
        console.log(data);
    }
  })
});

// // Fetch Location From API
// function fetchLocation(e) {
//   e.preventDefault();

//   // Get User Input
//   const location = document.querySelector('search-term').value;
  
//   // Fetch Location
//   fetch(`https://www.triposo.com/api/20200405/location.json?location=${location}&account=JEM7ZTLR&fields=id,name,parent_id,country_id,snippet,coordinates,images&token=koerzthbb52l98zhhsdxhuovxhoouzi7&callback=callback`, {
//     jsonCallbackFunction: 'callback'
//   })
//     //  Map Promise Response to json
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }

// Autocomplete Search Function
function activatePlacesSearch(){
  var input = document.getElementById('search-term');
  var autocomplete = new google.maps.places.Autocomplete(input);
  }

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // $(".create-form").on("submit", function(event) {
  //   event.preventDefault();
  $("#wish").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#search-term")
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
