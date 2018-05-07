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
      var list = document.getElementById('headlines');
      var listItem = document.createElement("h2");
      //make link to full article
      var itemLink = document.createElement("a");
      itemLink.href = currentArticle.webUrl;
      //get thumbnail for each headline
      var thumbnail = document.createElement("img");
      thumbnail.src = currentArticle.fields['thumbnail'];
      list.appendChild(listItem);
      list.appendChild(itemLink);
      list.appendChild(thumbnail);
      listItem.innerHTML = currentArticle.webTitle;
      itemLink.innerHTML = "read more";
      //connect to aylien for summary
      var sumUrl = ("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + currentArticle.webUrl)
      fetch(sumUrl).then(res => {
        if(res.status !== 200) {
          console.log('res.status not 200, status code: ' + res.status);
          return;
        }
        res.json().then(function(dataSum) {
          var summary = document.createElement("h4");
          // var summaries = dataSum.sentences;
          summary.innerHTML = dataSum.sentences;
          list.appendChild(summary);
          summary.innerHTML = dataSum.sentences;
        })
      })
    }
  });
});