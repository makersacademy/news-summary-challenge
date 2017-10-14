
showNewsSummary();

var huwEdwards = new HuwEdwards();
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
