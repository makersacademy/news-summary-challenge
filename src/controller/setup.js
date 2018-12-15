document.addEventListener("DOMContentLoaded", function() {
  var address = "https://content.guardianapis.com/"
  var parameters = "search?type=article&show-elements=image&show-fields=thumbnail,headline,body,byline&api-key="

  function reqListener () {
    var data = myRequest.response;
    var query = JSON.parse(data);

    var i;
    var numberOfResults = query.response.results.length;

    headlines = new Headlines();

    for (i = 0; i < numberOfResults; i++) {
      var paragraphs = document.createElement( 'html' );
      paragraphs.innerHTML = query.response.results[i].fields.body;

      headlines.addArticle(
        query.response.results[i].fields.thumbnail,
        query.response.results[i].fields.headline,
        paragraphs.getElementsByTagName('p')[0].innerHTML,
        paragraphs.getElementsByTagName('p')[1].innerHTML,
        paragraphs.getElementsByTagName('p')[2].innerHTML,
        query.response.results[i].webUrl
      );
    }

    controller = new Controller(headlines);
    controller.html("app")
  }

  var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", reqListener);
  myRequest.open("GET", address + parameters + apiKey);
  myRequest.send();
})
