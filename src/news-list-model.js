function NewsList() {
  this.newslist = [];
}

NewsList.prototype.storeNews = function(rawlist) {
  console.log(rawlist)
  var self = this;

  rawlist.forEach(function(n) { 
    var news = new News(n.webTitle, n.fields.body, n.webUrl, n.fields.thumbnail, n.webPublicationDate);
    self.newslist.push(news)
  })
  
  // rawlist.forEach(function(n) {
  //   self.newslist.push( {
  //     title: n.webTitle,
  //     body: n.fields.body,
  //     url: n.webUrl,
  //     thumbnail: n.fields.thumbnail
  //   })
  // })
};

NewsList.prototype.findById = function(id) {
  return this.newslist.find(function(news) {
    return news.id == id;
  })
};
