newsService = new ArticleController()
let html = ""

loadArticles()

function loadArticles() {
  newsService.getTodaysArticles(function (articles) {
    let articlesDiv = document.getElementById("articles");
    articles.forEach(function (article) {
      articlesDiv.innerHTML += formatArticleHTML(article);
    });
  });
}

function formatArticleHTML(article) {
  return `<div class="container">
            <div class="row" style="padding: 10px">
              <div class="col">
                <div class="card" id="${article.id}">
                <img class="card-img-top" src="${article.thumbnail}" alt="Article img">
                  <div class="card-body">
                  <h4 class="card-text" id="article-headline" style="padding: 10px;">${article.headline}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>`
}
