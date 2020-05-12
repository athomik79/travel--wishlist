// var APIKey = "koerzthbb52l98zhhsdxhuovxhoouzi7";
// var queryURL = "https://www.triposo.com/api/20200405///api/20200405/location.json?fields=id,parent_id,coordinates,score,country_id,type,intro,content,images,attribution,properties,tags,tag_labels,structured_content,public_transport_maps,name,snippet,names,musement_locations,climate,part_of,intro_language_info,structured_content_language_info,snippet_language_info" + "&units=I&key=" + APIKey;

const newburger = document.getElementById('newburger');

console.log(newburger);
newburger.addEventListener('keyup', (e) => {
    console.log(e);
});

    // // Send the Get request.
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response){
    //   for (var i=0; i<10; i++)
    
    // {
    //   var id = response.result.data[i].location_id
    //   var idDiv = "<div id=\"id"+i+"\">"+ id + "</div>";
    //       $('#addburger').append(idDiv);
    // }
    //     },