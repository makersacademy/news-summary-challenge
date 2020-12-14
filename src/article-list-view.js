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
        return '<ul>' +
                this.articleList.getArticles().map(function(article) {
                    return `<li>
                        <img src=${article.getThumbnail()}><br>
                        <p>${article.getHeadline()}</p><br>
                        <p>${article.getSummary()}</p>
                    </li>`;
                })
                + '</ul>';
    }
}
