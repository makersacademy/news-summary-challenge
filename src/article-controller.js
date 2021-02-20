'use strict';

class ArticleController {
    constructor(articleList = new ArticleList(), articleListView = new ArticleListView(articleList)) {
        this.articleList = articleList;
        this.articleListView = articleListView;
    }

    insertArtListHTML() {
      document.getElementById('app').innerHTML = this.articleListView.renderArtListHtml();
    }


    getApiData() {
      return fetch("https://content.guardianapis.com/search?&show-fields=all&api-key=78fb758b-9cd0-48e8-96c1-fe29eb42c6d0")
      .then(response => response.json())
      .then(data => this.renderArticleListPage(data.response.results));
    }

    renderArticleListPage(data) {
      console.log(data)
      for (let article of data) {
        let newArticle = new Article(
          article.fields.headline,
          article.fields.thumbnail,
          article.fields.body,
          article.webUrl,
          article.id
        );
        this.articleList.addArticle(newArticle);
      }
      this.insertArtListHTML()
    }


    renderArticlePage(id) {
      for (let article of this.articleList.getArticles()) {
        if (article.id === id) {
          let singleArticleView = new SingleArticleView (article)
          document.getElementById('app').innerHTML = singleArticleView.generateArtHTML();
        }
      }
    }


}
  let controller = new ArticleController();
  controller.getApiData();

  window.addEventListener("hashchange", () => {
  let hash = window.location.hash;
  controller.renderArticlePage(parseInt(hash.substring(1),10));
});
