'use strict';

class ArticleList {
    constructor() {
        this.articles= [];
    }

    getArticles() {
        return this.articles;
    }

    addArticle(article) {
        this.articles.push(article);
    }
}
