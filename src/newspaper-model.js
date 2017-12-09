function Newspaper () {
  this._articles = []
}

Newspaper.prototype.addArticle = function (article) {
  this._articles.push(article)
};

Newspaper.prototype.getAllArticles = function () {
  return this._articles;
};
