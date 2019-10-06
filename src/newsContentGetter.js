$(document).ready(function() {
  $.get("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=world&from-date=" + new Date().toISOString().split('T')[0], function(data) {
    latestNews = data.response.results;
    displayHTML = ""

    latestNews.forEach(function(story) {
      displayHTML += ("<p>" + story.webTitle + "</br>" + "<a href=" + story.webUrl + ">read more</a></p>")
    });

    document.getElementById("newsContent").innerHTML = displayHTML;
  });
});
