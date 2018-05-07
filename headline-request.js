var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search'

fetch(url).then(res => {
  if (res.status !== 200) {
    console.log('res.status not 200, status code: ' + res.status);
    return;
  }
  res.json().then(function(data) {

    var headline = document.getElementById('headline');
    var articles = data.response.results;

    for (var i = 0; i < articles.length; i++) {
      var currentArticle = articles[i];
      var list = document.getElementById('headlines');
      var listItem = document.createElement("li");
      list.appendChild(listItem);
      listItem.innerHTML = currentArticle.webTitle;
    }
  });
});