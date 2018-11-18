var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail'
fetch(url).then(res => {

  res.json().then(function(data) {

    var articles = data.response.results;
    for(var i = 0; i < articles.length; i++) {
      var currentArticle = articles[i];
      var articleList = document.getElementById('headlines');
      var articleListItem = document.createElement("h2");
      var itemLink = document.createElement("a");
      itemLink.href = currentArticle.webUrl;
      var thumbnail = document.createElement("img");
      thumbnail.src = currentArticle.fields['thumbnail'];
      document.body.appendChild(articleListItem);
      document.body.appendChild(itemLink);
      document.body.appendChild(thumbnail);
      articleListItem.innerHTML = currentArticle.webTitle;
      itemLink.innerHTML = "read more";
      var summaryUrl = ("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + currentArticle.webUrl)
      fetch(summaryUrl).then(res => {
        res.json().then(function(dataSummary) {
          var summary = document.createElement("p");
          summary.innerHTML = dataSummary.sentences;
          document.body.appendChild(summary);
          summary.innerHTML = dataSummary.sentences;
        })
      })
    }
  });
});
