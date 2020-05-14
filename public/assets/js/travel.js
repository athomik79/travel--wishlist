// TEST QUERY URL AND API KEY FOR TRIPOSO
// var APIKey = "koerzthbb52l98zhhsdxhuovxhoouzi7";
// var queryURL = "https://www.triposo.com/api/20200405///api/20200405/location.json?fields=id,parent_id,coordinates,score,country_id,type,intro,content,images,attribution,properties,tags,tag_labels,structured_content,public_transport_maps,name,snippet,names,musement_locations,climate,part_of,intro_language_info,structured_content_language_info,snippet_language_info" + "&units=I&key=" + APIKey;


// SEARCH BAR API QUERY BASED ON NYT EXERCISE
function buildQueryURL() {
    // queryURL is the url we'll use to query the API
   var queryURL = "/api/20200405/location.json?fields=id,name,parent_id,country_id,snippet,coordinates,images";
 
   // Set the API key
   var queryParams = { "api-key": "koerzthbb52l98zhhsdxhuovxhoouzi7" };
 
   // Grab text the user typed into the search input, add to the queryParams object
   queryParams.q = $("#search-term")
     .val()
     .trim();
 
   // Logging the URL so we have access to it for troubleshooting
   console.log("---------------\nURL: " + queryURL + "\n---------------");
   console.log(queryURL + $.param(queryParams));
   return queryURL + $.param(queryParams);
 }
 
 function updatePage(triposoData) {
 
   // API doesn't have a "limit" parameter, so we have to do this ourselves
   var numLocations = $("#location-count").val();
 
   console.log(triposoData);
   console.log("------------------------------------");
 
   // Loop through and build elements for the defined number of locations
   for (var i = 0; i < numLocations; i++) {
     // Get specific info for current index
     var location = triposoData.response.docs[i];
 
      // Increase the locationCount (track location # - starting at 1)
      var locationCount = i + 1;
 
      // Create the  list group to contain the articles and add the article content for each
     var $locationList = $("<ul>");
     $locationList.addClass("list-group");
 
     // Add the newly created element to the DOM
     $("#location-section").append($locationList);
   
 
     // If the location has an id, log and append to $locationList
     var name = location.name;
     var $locationListItem = $("<li class='list-group-item locationId'>");
 
     if (name && name.main) {
       console.log(name.main);
       $locationListItem.append(
         "<span class='label label-primary'>" +
           locationCount +
           "</span>" +
           "<strong> " +
           name.main +
           "</strong>"
       );
     }
   }
 }
 
     // Function to empty out the articles
 function clear() {
   $("#location-section").empty();
 }
 
 // CLICK HANDLERS
 // ==========================================================
 
 // .on("click") function associated with the Search Button
 $("#run-search").on("click", function(event) {
   // This line allows us to take advantage of the HTML "submit" property
   // This way we can hit enter on the keyboard and it registers the search
   // (in addition to clicks). Prevents the page from reloading on form submit.
   event.preventDefault();
 
   // Empty the region associated with the articles
   clear();
 
   // Build the query URL for the ajax request to the Triposo API
   var queryURL = buildQueryURL();
 
   // Make the AJAX request to the API - GETs the JSON data at the queryURL.
   // The data then gets passed as an argument to the updatePage function
   $.ajax({
     url: queryURL,
     method: "GET"
   }).then(updatePage);
 });
 
 //  .on("click") function associated with the clear button
 $("#clear-all").on("click", clear);



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