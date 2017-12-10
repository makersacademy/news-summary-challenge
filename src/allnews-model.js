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
      // self.renderHTML(self.putInElements(self._data))
      console.log(self._data)
    }
    request.send()
  }


  AllNews.prototype.putInElementsRenderHTML = function(data, self) {
    console.log(this)
    console.log(self)
    self.renderHTML(self.putInElements(data))
  }

  AllNews.prototype.putInElements = function(data){
    var titlearr = data.map(function(item){
      return '<li><div><a href="' + item.webUrl + '">' + item.webTitle + '</a></div></li>'
    });
    return "<ul>" + titlearr.join('') + "</ul>"
  }

  AllNews.prototype.renderHTML = function(string){
    document.getElementById('newsfeed').innerHTML = string
  }

  exports.AllNews = AllNews;
})(this);

// "http://192.168.0.29:8080/testdata.html"

// allnews = new AllNews()
// allnews.makeRequest("http://192.168.0.29:8080/testdata.html")
