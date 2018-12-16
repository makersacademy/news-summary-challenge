(function (exports) {

  function GatherData() {

  }

  GatherData.prototype.askTheGuardian = function() {
    var address = "https://content.guardianapis.com/";
    var parameters = "search?type=article&show-elements=image&show-fields=thumbnail,headline,body,byline&api-key=";
    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = myRequest.response;
        var query = JSON.parse(data);
        buildTheArticles(query);
      }
    }
    myRequest.open("GET", address + parameters + apiKey);
    myRequest.send();
  }

  function buildTheArticles(query) {
    var i;
    var numberOfResults = query.response.results.length;
  
    headlines = new Headlines();
  
    for (i = 0; i < numberOfResults; i++) {
      var paragraphs = document.createElement( 'html' );
      paragraphs.innerHTML = query.response.results[i].fields.body;
  
      headlines.addArticle(
        query.response.results[i].fields.thumbnail,
        query.response.results[i].sectionName,
        query.response.results[i].fields.headline,
        query.response.results[i].fields.byline,
        paragraphs.getElementsByTagName('p')[0].innerHTML,
        paragraphs.getElementsByTagName('p')[1].innerHTML,
        paragraphs.getElementsByTagName('p')[2].innerHTML,
        query.response.results[i].webUrl
      );
    }
  
    renderThePage();
  }

  function renderThePage() {
    controller = new Controller(headlines);
    controller.html("app");
  }

  exports.GatherData = GatherData;
})(this);

todaysNews = new GatherData();
todaysNews.askTheGuardian();
