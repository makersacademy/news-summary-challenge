function AllNews() {
  this._news = []
}

AllNews.prototype.add = function(article) {
  this._news.push(article)
}

AllNews.prototype.all = function(article) {
  return this._news
}
