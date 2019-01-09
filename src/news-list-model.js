(function(exports) {
  function NewsList(news_type) {
    this.newslist = []; 
    this.news_type = news_type? news_type : 'politics'; // original: food%20AND%20health, changed to fit user story
    this.getNews();
  }

  NewsList.prototype.storeNews = function(rawlist) {
    var self = this;

    rawlist.forEach(function(n) { 
      var news = new News(n.webTitle, n.fields.body, n.webUrl, n.fields.thumbnail, n.webPublicationDate);
      self.newslist.push(news);
    });
  };

  NewsList.prototype.findById = function(id) {
    return this.newslist.find(function(news) {
      return news.id == id;
    });
  };

  NewsList.prototype.getNews = function() {
    var self = this;
    var request = new XMLHttpRequest();
    request.open('GET', 'https://content.guardianapis.com/search?q=' + this.news_type + '&show-fields=headline,thumbnail,body&show-refinements=all&order-by=newest&api-key=075f0c45-9391-4826-9e03-45aa1550fcc9', false); // false for wat?
    // sample: http://content.guardianapis.com/search?api-key=test&show-fields=thumbnail
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
    request.onload = function () {
      var data = JSON.parse(request.response); // <- string
      self.storeNews(data.response.results);
    };
    request.send();
  };

  exports.NewsList = NewsList;
})(this);