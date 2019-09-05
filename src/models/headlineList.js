(function(exports) {

  function renderHeadlineListView() {

    var stories = JSON.parse(guardianRequest.responseText).response.results;

    document.getElementById("list-news").style.display = "block"
    document.getElementById("summary-news-block").style.display = "none"

    document.getElementById("summary-body-text").innerHTML = "";
    document.getElementById("summary-image").setAttribute("src", "")

    for (var i = 0; i < stories.length; i++) {
      document.getElementById('list-news').innerHTML +=
        "<div id='list-item'><a href=#" + stories[i].id + "><img class='image' id='image' src=" + stories[i].fields.thumbnail
        + "><h4 id='list-header'>" + stories[i].webTitle + "</h4>";
    }
  };

  exports.renderHeadlineListView = renderHeadlineListView

})(this)