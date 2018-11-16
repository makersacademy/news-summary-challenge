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
      articleList.create(article.webUrl, article.webTitle);
    });
    return articleList;
  })
  .then((articleList) => {
    var promiseList = articleList.articles.map((article) => {
      return article._setContent();
    });
    return Promise.all(promiseList);
  })
  .then(() => {
    return articleList;
  });
};

// I THINK IN MY FILE THAT ULTIMATELY DOES STUFF, IT SHOULD BASICALLY START WITH A PROMISE AND WHEN IT'S DONE ('THEN') set up all the variables and go from there
