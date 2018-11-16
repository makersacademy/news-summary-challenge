"use strict";
function NewsFeed(newsFeed){
this.news_articles = [];
this.article = "";

  (function(newsFeed) {
    function getFeed(string) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.response);
          var news = data.response.results
          var i = 0
          // console.log(newsFeed.news_articles)
          for (i = 0; i < news.length; i++) {
            var articleObj = {}
            articleObj.webTitle = news[i].webTitle;
            articleObj.thumbnail = news[i].fields.thumbnail;
            articleObj.webUrl = news[i].webUrl;

            newsFeed.news_articles.push(articleObj)
          }
          // console.log(newsFeed.news_articles)
          // return newsFeed.news_articles
          // console.log(newsFeed.news_articles.length)
        }
      }
      xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail,headline,trailText,bodyText&show-tags=all", true);
      xhttp.send();
    };

    function getArticle(url) {
      // console.log(url)
      var apiUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url + ""
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("article").innerHTML = ""
          var data = JSON.parse(this.response);
          var sentences = data.sentences
          // console.log(sentences)
          newsFeed.article = sentences
          // console.log(newsFeed.article)
        }
    }
    xhttp.open("GET", apiUrl, true);
    xhttp.send();
  }

    newsFeed.getFeed = getFeed
    newsFeed.getArticle = getArticle

  })(this);
}
