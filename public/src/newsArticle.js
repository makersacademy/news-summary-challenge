function NewsArticle(photo, desc, summary, title) {
  this._photo = photo
  this._desc = desc
  this._summary = summary
  this._title = title
}

NewsArticle.prototype.photo = function() {
  return this._photo
}

NewsArticle.prototype.desc = function() {
  return this._desc
}

NewsArticle.prototype.summary = function() {
  return this._summary
}

NewsArticle.prototype.title = function() {
  return this._title
}
