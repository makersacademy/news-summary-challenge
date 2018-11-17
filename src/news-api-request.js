var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail'
fetch(url).then(res => {
  if(res.status !== 200) {
    console.log('res.status not 200, status code: ' + res.status);
    return;
  }
  res.json().then(function(data) {
    var articles = data.response.results;
    for(var i = 0; i < articles.length; i++) {
      var currentArticle = articles[i];
      var newsList = document.getElementById("headlines");
      var listItem = document.createElement("h2");
      var itemLink = document.createElement("a");
      itemLink.href = currentArticle.webUrl;
      var thumbnail = document.createElement("img");
      thumbnail.src = currentArticle.fields['thumbnail'];
      document.body.appendChild(listItem);
      listItem.innerHTML = currentArticle.webTitle;
    }
  });
});
