
showNewsSummary();

var huwEdwards = new HuwEdwards();
var newsGrabber = new NewsGrabber();
newsGrabber.apiCallRecord();
newsGrabber.parseCall();
var renderer = new Renderer();



function showNewsSummary() {
  window
    .addEventListener("hashchange", function(showNewsSummary) {
      var newsIndex = location.hash.split("$")[1];
      var values = {
        newsItemSummary: huwEdwards.newsSummary(newsIndex)
      };
      renderer.view(values);
    });
}


function displayHeadlines(newsGrabber){
  console.log('1')
  formattedHeadlines = huwEdwards.headlinesList(newsGrabber.headlines)
  var values = {list_of_headlines: formattedHeadlines}
  renderer.view(values);
}
