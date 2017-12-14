(function (exports){

  function ArticleController(){
    this._data
  }

  ArticleController.prototype.makeRequest = function(url, callback){
    var request = new XMLHttpRequest()
    var self = this
    request.open("GET", url)
    request.onload = function() {
      self._data = JSON.parse(request.responseText).response.results
      console.log(self._data)
      callback(self._data, self)
    }
    request.send()
  }

  ArticleController.prototype.renderHTML = function(htmlString) {
    document.getElementById('newsfeed').innerHTML = htmlString
  }
  // AllNews.prototype.returnArticleWithSameId = function(id) {
  //   var final = this._data.find(function(article){
  //     return article.id === id
  //   });
  //   return final
  // }

  // AllNews.prototype.putInElementsRenderHTML = function(data, self) {
  //   self.renderHTML(self.putInElements(data))
  // }
  //
  // AllNews.prototype.renderHTML = function(string){
  //   document.getElementById('newsfeed').innerHTML = string
  // }

  // VIEW

  // AllNews.prototype.putInElements = function(data){
  //   var titlearr = data.map(function(item, index){
  //     return '<li><div><a href="' + item.webUrl + '">'
  //       + item.webTitle + '</a><p><a id="'+ index +'" href="#'+ item.id +'">View Summary</a></p></div></li>'
  //   });
  //   return "<ul>" + titlearr.join('') + "</ul>"
  // }

  exports.ArticleController = ArticleController;
})(this);
