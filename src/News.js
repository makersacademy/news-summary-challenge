function News(headline, url, id, summary) {
  this.headline = headline;
  this.url = url;
  this.id = id;
  this.summary = summary;
}

function NewsAggregator() {
  this.content = []
}
