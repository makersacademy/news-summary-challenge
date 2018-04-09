
  function NewsList() {
    this._news = []
}

NewsList.prototype.add = function(news) {
  this._news.push(news)
}

NewsList.prototype.all = function() {
  return this._news
}
