window.onload = function() {
  var list = new ArticleList();
  var request = new XMLHttpRequest();
  request.open('GET', `https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=thumbnail`, true);
  request.onload = function () {
    var data = JSON.parse(this.response);
    var articlesLength = data.response.results.length
    for (var i = 0; i < articlesLength; i++) {
      list.add({title: data.response.results[i].webTitle, url: data.response.results[i].webUrl, thumbnail: data.response.results[i].thumbnail})
    }
    var view = new ArticleListView(list)
    document.getElementById('app').innerHTML = view.createHTML()
  };

  request.send();
}
