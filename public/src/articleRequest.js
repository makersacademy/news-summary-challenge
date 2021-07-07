  function ArticleRequest() {
    this.url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail"
  };

  ArticleRequest.prototype.getNews = function(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response.response.results)
    }
    };
    xhr.open("GET", this.url, true);
    xhr.send(null);
  };
