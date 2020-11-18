newsService = new ArticleController()

loadArticles()

function loadArticles() {
  newsService.getTodaysArticles(function (articles) {
    _formatArticleHTML(articles)
  });
}

function _formatArticleHTML(articles) {
  let articleHTML = "";
  articles.forEach(function (article) {
    articleHTML += `<div class="grid_item">
                      <div class="card" id="${article.id}">
                        <img class="card_img" src="${article.thumbnail}" alt="Article img">
                          <div class="card_content">
                            <h2 class="card_header" id="article-headline">${article.headline}</h2>
                            <button class="card_btn">Read article<span>&rarr;</span></button>
                          </div>
                        </div>
                      </div>
                    </div>`;
  })
  _displayArticles(articleHTML)
}

function _displayArticles(articleHTML) {
  let articleHeading = "<h1 class='grid_item'>Today's Guardian Articles</h1>"
  let articlesDiv = document.getElementById("articles");
  articlesDiv.innerHTML = articleHeading + articleHTML;
}
