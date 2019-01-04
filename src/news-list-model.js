function NewsList() {
  this.parameter = "food%20AND%20health"
  this.rawlist = [];
  this.getNews();
  this.newslist = [];
}

NewsList.prototype.storeNews = function(rawlist) {
  console.log(rawlist)
  var self = this;

  rawlist.forEach(function(n) { 
    var news = new News(n.webTitle, n.fields.body, n.webUrl, n.fields.thumbnail, n.webPublicationDate);
    self.newslist.push(news)
  })

};

NewsList.prototype.findById = function(id) {
  return this.newslist.find(function(news) {
    return news.id == id;
  })
};

NewsList.prototype.getNews = function() {

  var self = this;
  var request = new XMLHttpRequest();
  request.open('GET', 'https://content.guardianapis.com/search?q=' + this.parameter + '&show-fields=headline,thumbnail,body&show-refinements=all&order-by=newest&api-key=075f0c45-9391-4826-9e03-45aa1550fcc9', false); // false for wat?
  // ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
  request.onload = function () {
    var data = JSON.parse(request.response); // <- string
    self.rawlist = data.response.results

  }
  request.send();
};