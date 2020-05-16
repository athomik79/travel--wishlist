function activatePlacesSearch(){
  var input = document.getElementById('search_term');
  var autocomplete = new google.maps.places.Autocomplete(input);
}

// const locationForm = document.querySelector('location-form');

// // Event Listener
// $(function() {
//   $("#run-search").on("click", function(event) {
//     event.preventDefault();

//   const city = document.querySelector('#search-term').value;

//     console.log(location);
//     console.log(event.target.value);


//     })

//   $.ajax({
//     type: "GET",
//     url: "https://www.triposo.com/api/20200405/location.json?location_id="+city+"&count=10&fields=id,name,score,snippet&account=ORID4DVT&fields=all&token=9mzqr3x3hr2juisyaz7mfqmsezfooz85"",
//     dataType: 'JSON',
//     success: function(data){
//         console.log(data);
//     }
//   })
// });

// $("#find").click(function(event)
// // make initMap global and inside of that click handlers.  when run in different button clicks, pass value
// { event.preventDefault();
//   initMap()
// });
// function initMap() {
//   let location = new Object();
//   navigator.geolocation.getCurrentPosition(function (pos) {
//     location.lat = pos.coords.latitude;
//     gLat = location.lat;
//     location.long = pos.coords.longitude;
//     gLong = location.long;
//     map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: location.lat, lng: location.long },
//       zoom: 16,
//     });
//     currentLat = location.lat;
//     localStorage.setItem("lat", currentLat);
//     currentLong = location.long;
//     localStorage.setItem("lon", currentLong);
//     let currentLocation = { lat: location.lat, lng: location.long };
//     let marker = new google.maps.Marker({
//       position: currentLocation,
//       map: map
//     });
//     google.maps.event.addListener(search, 'places_changed', function () {
//       document.getElementById("destination").onclick = function () {
//         var input = document.getElementById("search");
//         google.maps.event.trigger(input, "focus", {});
//         google.maps.event.trigger(input, "keydown", { keyCode: 13 });
//         google.maps.event.trigger(this, "focus", {});
//       }
//     });
//   });
// }
// $(function() {
//   $("#newburger").on("keyup", function(event) {
//     event.preventDefault();
//     const searchBar = document.querySelector('#newburger').addEventListener
//     console.log(searchBar);
//     console.log(event.target.value);
//   })
//   });
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#run-search").click(function(event) {
    event.preventDefault();
    var city = $("#search_term").val().charAt(0).toUpperCase() + $("#search_term").val().slice(1)
    console.log(city)
    if (city) {
      var queryURL = "https://www.triposo.com/api/20200405/poi.json?location_id="+city+"&count=10&fields=id,name,score,snippet&account=ORID4DVT&fields=all&token=9mzqr3x3hr2juisyaz7mfqmsezfooz85";
  $.ajax({
     url: queryURL,
     method: "GET"
   }).then(response => {
       console.log(response);
   });
    }
  });
  $("#newburger").on("keyup", function(event) {
    event.preventDefault();
    const searchBar = document.querySelector('#newburger').addEventListener
    console.log(searchBar);
    console.log(event.target.value);
  })
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


//  CURRENT LOCATION MAP FUNCTION
// Map function for current location
// $("#find").click(function()
//     {initMap()});
//     console.log("you're here");

//     function initMap () {
//     let location = new Object();
//     navigator.geolocation.getCurrentPosition(function(pos) 
//     {
    
//         location.lat = pos.coords.latitude;
//         gLat = location.lat;
//         location.long = pos.coords.longitude;
//         gLong = location.long;
//         map = new google.maps.Map(document.getElementById("map"), {
//             center: { lat: location.lat, lng: location.long },
//             zoom: 16,
//         });
//         currentLat = location.lat;
//         localStorage.setItem("lat",currentLat);
//         currentLong = location.long;
//         localStorage.setItem("lon",currentLong);
//         let currentLocation = { lat: location.lat, lng: location.long };
//         let marker = new google.maps.Marker({
//         position: currentLocation,
//         map: map
//         });

//         google.maps.event.addListener(search, 'places_changed', function() {
//         document.getElementById("destination").onclick = function () {
//         var input = document.getElementById("search");

//         google.maps.event.trigger(input, "focus", {});
//         google.maps.event.trigger(input, "keydown", { keyCode: 13 });
//         google.maps.event.trigger(this, "focus", {});
//     }
//     });   
//     });
// }