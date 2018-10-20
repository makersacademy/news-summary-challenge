let newsStories = null;

(function getData(){
    $.ajax({
      url: "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk?show-editors-picks=true&order-by=newest",
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data) {
      newsStories = data.response.editorsPicks;
    })
    .fail(function(xhr,status,errorThrown) {
      alert("Sorry, there was a problem. Status: " + status)
    })
})();
