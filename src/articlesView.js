newsService = new ArticleController()

function loadArticles() {
  newsService.getTodaysArticles(function (articles) {
    let articleDiv = document.getElementById("articles");
    articles.forEach(function (article) {
      articleDiv.innerHTML.append(article);
    });
  });
}

