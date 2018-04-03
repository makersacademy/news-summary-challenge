// runs on page load

articleList = new ArticleList;

refreshArticleList()


function refreshArticleList() {
  articleList.getArticlesFromAPI().then(function (response) {
    console.log("success");
    response.response.results.forEach(element => {
      var url = element.webUrl;
      var headline = element.webTitle;
      var date = element.webPublicationDate;
      articleList.addArticle(new Article(url, headline, date))
    });
    document.getElementById('article-list').innerHTML = articleList.outputArticles();
  }, function (error) {
    console.log("failure");
  })
}


