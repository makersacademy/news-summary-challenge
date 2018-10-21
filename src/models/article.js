
$(document).ready(function() {

    function getApiData() {
      var apiObj = $.ajax({
        url: "https://content.guardianapis.com/search?show-elements=all&show-fields=all&api-key=6903f70b-8ea8-4bdd-bcf4-b7ead85f2e20",
        // success: function(data) {
        //   $("#newspaper-api").text(apiObj.responseJSON)
        // }
        success: function(data) {
            $('#api').append("<img src ='https://media.guim.co.uk/2ad6208629692b6b1c0b6957f5fc7d722e574708/0_114_3564_2139/500.jpg'>");
            for (var i = 0; i < data.response.results.length; i++) 
            {
                
            $('#newspaper-api').append("<h1>" + data.response.results[i].webTitle + "<a href='" + data.response.results[i].webUrl + "'>" + "link to news" + "</a>" + "</h1>" + "<img src='"+ data.response.results[i].fields.thumbnail +"'>" + "<div>"+ data.response.results[i].fields.bodyText +"</div>");
            }
            console.log(data);
            }
      })
    }
  
    getApiData();
})