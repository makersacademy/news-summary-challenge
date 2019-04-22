// Connection to Guardian API:
var articleList = new ArticleList();
var request = new XMLHttpRequest();
request.open('GET', `https://content.guardianapis.com/search?api-key=${guardianApiKey}&show-fields=thumbnail`, true);
request.onload = function () {
  var data = JSON.parse(this.response);
  var articlesLength = data.response.results.length
  for (var i = 0; i < articlesLength; i++) {
    articleList.add({title: data.response.results[i].webTitle, url: data.response.results[i].webUrl, picture: data.response.results[i].fields.thumbnail})
  }
  console.log(articleList.articles)
};
request.send();
