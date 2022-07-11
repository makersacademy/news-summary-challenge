class NewsModel {

  constructor () {
    this.articles = [];
  }

  setArticle = (article) => {
    this.articles.push(article);
  }

  getArticle = () => {
    return this.articles;
  }

  clear = () => {
    this.articles = [];
  }

}

module.exports = NewsModel;