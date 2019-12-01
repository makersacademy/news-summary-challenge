(function (exports) {
function Headline(title, article, image) {
  this.title = title;
  this.article = article;
  this.image = image
}

Headline.prototype.returnTitle = function () {
  return this.title
};

Headline.prototype.returnArticle = function () {
  return this.article
};

Headline.prototype.returnImageLink = function () {
  return this.image
};

exports.Headline = Headline
})(this)
