(function (exports){

  function AllNews(){
    this._data
  }

  AllNews.prototype.makeRequest = function(url, callback){
    var request = new XMLHttpRequest()
    var self = this
    request.open("GET", url)
    request.onload = function() {
      self._data = JSON.parse(request.responseText).response.results
      callback(self._data, self)
    }
    request.send()
  }

  AllNews.prototype.returnArticleWithSameId = function(id) {
    var final = this._data.find(function(article){
      return article.id === id
    });
    return final
  }

  AllNews.prototype.putInElementsRenderHTML = function(data, self) {
    self.renderHTML(self.putInElements(data))
  }

  AllNews.prototype.renderHTML = function(string){
    document.getElementById('newsfeed').innerHTML = string
  }

  // VIEW

  AllNews.prototype.putInElements = function(data){
    var titlearr = data.map(function(item){
      return '<li><div><a href="' + item.webUrl + '">'
        + item.webTitle + '</a><p><a href="#'+ item.id +'">View Summary</a></p></div></li>'
    });
    return "<ul>" + titlearr.join('') + "</ul>"
  }

  exports.AllNews = AllNews;
})(this);
