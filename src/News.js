function News(headline, url, id) {
  this.headline = headline;
  this.url = url;
  this.id = id;
  this.summary = undefined;
}

function NewsAggregator() {
  this.content = []
}
