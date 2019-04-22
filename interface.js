// Connection to Guardian API:
var articleList = new ArticleList();
var request = new XMLHttpRequest();
request.open('GET', `https://content.guardianapis.com/search?api-key=${guardianApiKey}&show-fields=thumbnail`, true);
request.onload = function () {
  var data = JSON.parse(this.response);
  var articlesLength = data.response.results.length
  for (var i = 0; i < articlesLength; i++) {
    articleList.add({title: data.response.results[i].webTitle, url: data.response.results[i].webUrl, thumbnail: data.response.results[i].fields.thumbnail})
  }
};
request.send();

var articleListView = new ArticleListView(articleList)
// This part of the interface isn't working yet (I have to paste the below into the console)
document.getElementById('app').innerHTML = articleListView.createHTML()
