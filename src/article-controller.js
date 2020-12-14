'use strict';

class ArticleController {
    constructor(articleList = new ArticleList(), articleListView = new ArticleListView(articleList)) {
        this.articleList = articleList;
        this.articleListView = articleListView;
    }

    insertArtListHTML() {
      document.getElementById('articles').innerHTML = this.articleListView.renderArtListHtml();
    }

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
          article.fields.thumbnail,
          article.fields.body,
          article.webUrl,
        );
        this.articleList.addArticle(newArticle);
      }
      insertArtListHTML()
    }

}
  let controller = new ArticleController();
  controller.apiCall();
