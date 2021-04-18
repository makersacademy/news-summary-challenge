'use strict';

class ArticleClass {
  constructor(articles = [{ webTitle: "News", webUrl: "https://www.theguardian.com/", thumbnail: "https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=661&q=80" }]) {
    this.articles = articles;
  };

  viewArticles() {
    return this.articles;
  };

};