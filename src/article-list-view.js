'use strict';

class ArticleListView {
    constructor(articleList = new ArticleList()) {
        this.articleList = articleList;
    }

    getArticleList() {
      return this.articleList;
    }

    renderArtListHtml() {
        console.log(this.articleList.getArticles())
        return this.articleList.getArticles().map(article => {
          return `
          <img src=${article.getThumbnail()}>
          <p>${article.getHeadline()}</p>
          <br></br>
          `;
        }).join('');
    }
}
