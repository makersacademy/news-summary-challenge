function initialize () {

  var articleList = new ArticleList();

  var articlesDiv = document.getElementById('main')

  function getAPIData () {
    var request = new XMLHttpRequest();
    var urlAPI = "https://content.guardianapis.com/uk-news?show-editors-picks=true&api-key=690962db-172e-4bae-8562-7fee1e1fffa3&show-fields=thumbnail";
    request.open('GET', urlAPI, true);
    request.onload = function () {
      var result = JSON.parse(this.response);
      var responseLenght = result.response.results.length;
      for (var i=0; i<responseLenght; i++) {
      articleList.add(result.response.results[i].webTitle, result.response.results[i].webUrl, result.response.results[i].fields.thumbnail)
      }

      articlesDiv.appendChild(articleList.displayArticles());

    }
    request.send();
  }

  getAPIData();

}

document.addEventListener("DOMContentLoaded", initialize);
