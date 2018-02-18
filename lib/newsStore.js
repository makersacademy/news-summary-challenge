
(function (exports) {
  const MAX_LENGTH = 5;

  class NewsStore {
    constructor(api, max_length = MAX_LENGTH) {
      this.news = api.response.results;
      this.length = max_length > this.news.length ? this.news.length : max_length;
      this.headline = [];

      for (let i = 0; i < this.length; i += 1) {
        const article = this.news[i];
        this.headline.push(article.webTitle);
      }
    }

    headlines() {
      return this.headline.slice();
    }
  }

  exports.NewsStore = NewsStore;
}(this));
