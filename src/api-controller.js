import { ArticleList as ArticleList } from "./article-list.js";

class APIController {
  constructor() {
  }

  summarise(article, summariser="http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=") {
    return fetch(summariser + article.url)
    .then((response) => { return response.json(); })
    .then((json) => {
      article.content = json.text;
      return article;
    });
  }

  getArticles(url) {
    var articleList = new ArticleList();
    return fetch(url)
    .then((data) => { return data.json() })
    .then((json) => { return json.response.results })
    .then((articles) => { return this._fillArticleList(articles, articleList) })
    .then((articleList) => { return this._makePromise(articleList) })
    .then(() => { return articleList; });
  }

  _fillArticleList(articles, articleList) {
    articles.forEach((article) => {
      articleList.create(article.webUrl, article.webTitle, article.fields.thumbnail);
    });
    return articleList;
  }

  _makePromise(articleList) {
    var promiseList = articleList.articles.map((article) => {
      return this.summarise(article);
    });
    return Promise.all(promiseList);
  }
}

export { APIController };
