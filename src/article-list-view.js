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
          <p>${article.getHeadline()}</p>
          <img src=${article.getThumbnail()}>
          
          <br></br>
          `;
        }).join('');
    }
}
