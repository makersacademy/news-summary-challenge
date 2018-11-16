function ArticleGetter() {
}

ArticleGetter.prototype.getArticles = function(url) {
  var articleList = new ArticleList();
  return fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    return json.response.results;
  })
  .then((articles) => {
    articles.forEach((article) => {
      articleList.create(article.webUrl, article.webTitle, article.fields.thumbnail);
    });
    return articleList;
  })
  .then((articleList) => {
    var promiseList = articleList.articles.map((article) => {
      return article.setContent();
    });
    return Promise.all(promiseList);
  })
  .then(() => {
    return articleList;
  });
};
