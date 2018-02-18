
(function (exports) {
  const MAX_LENGTH = 5;

  class ArticleLog {
    constructor(api, Article, max_length = MAX_LENGTH) {
      this.Article = Article
      this.news = api.response.results;
      this.length = max_length > this.news.length ? this.news.length : max_length;
      this.articles = [];

      for (let i = 0; i < this.length; i += 1) {
        const article = this.Article.createArticle(this.news[i])
        this.articles.push(article);
      }
    }

    collection() {
      return this.articles.slice();
    }
  }

  exports.ArticleLog = ArticleLog;
}(this));
