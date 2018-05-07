var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail'

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
      var itemLink = document.createElement("a");
      itemLink.href = currentArticle.webUrl;
      var thumbnail = document.createElement("img");
      thumbnail.src = currentArticle.fields['thumbnail'];
      list.appendChild(listItem);
      list.appendChild(itemLink);
      list.appendChild(thumbnail);
      listItem.innerHTML = currentArticle.webTitle;
      itemLink.innerHTML = "read more";
    }
  });
});