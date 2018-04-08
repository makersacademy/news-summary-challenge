function NewsArticle(photo, summary, title) {
  this._photo = photo
  this._summary = summary
  this._title = title
}

NewsArticle.prototype.photo = function() {
  return this._photo
}

NewsArticle.prototype.summary = function() {
  return this._summary
}

NewsArticle.prototype.title = function() {
  return this._title
}
