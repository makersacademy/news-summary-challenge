(function (exports){

  function AllNews(){
    this._data
  }

  AllNews.prototype.makeRequest = function(url){
    var request = new XMLHttpRequest()
    var self = this
    request.open("GET", url)
    request.onload = function() {
      var data = JSON.parse(request.responseText).response.results
      self._data = data
      elem = document.getElementById('newsfeed')
    }
    request.send()
  }

  AllNews.prototype.putInElements = function(data){
    var titlearr = data.response.results.map(function(item){
      return "<li><div>" + item.webTitle + "</div></li>"
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
