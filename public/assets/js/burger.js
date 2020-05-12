// var APIKey = "koerzthbb52l98zhhsdxhuovxhoouzi7";
// var queryURL = "https://www.triposo.com/api/20200405///api/20200405/location.json?fields=id,parent_id,coordinates,score,country_id,type,intro,content,images,attribution,properties,tags,tag_labels,structured_content,public_transport_maps,name,snippet,names,musement_locations,climate,part_of,intro_language_info,structured_content_language_info,snippet_language_info" + "&units=I&key=" + APIKey;

$(function() {
  $("#newburger").on("keyup", function(event) {
    event.preventDefault();

    const searchBar = document.querySelector('#newburger').addEventListener
    console.log(searchBar);
    console.log(event.target.value);
  })
  });

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger")
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
