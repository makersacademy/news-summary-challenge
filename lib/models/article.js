function Article() {
};

Article.prototype.fill = function(content) {
  this.headline = content.headline;
  this.body = content.bodyText;
  this.image = content.thumbnail;
  this.url = content.shortUrl;
  this.full = content.body;
}
