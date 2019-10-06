newsAgg = new NewsAggregator();

// fetches from APIs
newsAgg.getAllArticles();

setTimeout(function() {
// displays short 2 sentence summary of each article
newsAgg.displaySummaryArticles();
}, 1500);

window.addEventListener("hashchange", function (event) {
  event.preventDefault();

  // clears existing list of articles from list tag
  document.getElementById('headlines-list').innerHTML = ("");
  
  // gets hash change tag
  var selected_news_id = location.hash.split("/")[1]
  
  // populates with full article details
  newsAgg.displayFullArticle(selected_news_id);

})
