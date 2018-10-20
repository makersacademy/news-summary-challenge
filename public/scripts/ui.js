$(document).ajaxComplete(function() {
  newsfeed = new NewsFeed;
  let headlines = newsfeed.getHeadlines();
  console.log(headlines);
  headlines.forEach(function(headline){
    $('.headlines').append(headlinesHTML(headline));
  });
});

function headlinesHTML(headline) {
  let headline_div = "<div class='headline'>" + headline + "</div>";
  return headline_div;
}
