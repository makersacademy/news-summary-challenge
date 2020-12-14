class ArticleController {
  static app = document.getElementById("app");
  static articles = [];

  apiCall() {
    fetch(
      "https://content.guardianapis.com/search?&show-fields=all&api-key=78fb758b-9cd0-48e8-96c1-fe29eb42c6d0"
    )
      .then((response) => response.json())
      .then((data) => this.renderArticleListPage(data.response.results));
  }

  renderArticleListPage(data) {
    for (let article of data) {
      let newArticle = new Article(
        article.fields.headline,
        article.webUrl,
        article.fields.thumbnail,
        article.fields.firstPublicationDate,
        article.fields.body
      );
      ArticleController.articles.push(newArticle);
      ArticleController.app.innerHTML += newArticle.getListHTML();
    }
  }

  renderArticlePage(articleNumber) {
    if (ArticleController.articles.length === 0) {
      throw new Error("No articles to display");
    }
    for (let article of ArticleController.articles) {
      if (article.id === articleNumber) {
        ArticleController.app.innerHTML = article.getPageHTML();
      }
    }
  }
}

let controller = new ArticleController();
controller.apiCall();

window.addEventListener("hashchange", () => {
  let hash = window.location.hash;
  controller.renderArticlePage(parseInt(hash.substring(1)));
});
