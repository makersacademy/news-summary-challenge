function NewsArticle(photo, website, title) {
  this._photo = photo
  this._webUrl = website
  this._title = title
}

NewsArticle.prototype.photo = function() {
  return this._photo
}

NewsArticle.prototype.webUrl = function() {
  return this._webUrl
}

NewsArticle.prototype.title = function() {
  return this._title
}
