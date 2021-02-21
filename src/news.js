
function News(body, picture) {
  this._body = body
  this._image = picture
}

News.prototype.getBody = function() {
  return (this._body + "\n" + this._image)
}

News.prototype.abbrBody = function() {
  return (this._body.length > 20 ? this._body.slice(0, 20) + '...' : this._body);
}
