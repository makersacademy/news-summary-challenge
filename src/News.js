function News(headline, url, id, linkToImage) {
  this.headline = headline;
  this.url = url;
  this.id = id;
  this.linkToImage = linkToImage;
}

function NewsAggregator() {
  this.content = []
}
