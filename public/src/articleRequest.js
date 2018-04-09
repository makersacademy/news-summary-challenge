  function ArticleRequest() {
    this.response = []
    this.url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/news?show-fields=thumbnail"
  };

  ArticleRequest.prototype.getNews = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", this.url, false);
    xhr.send(null);
    var response = JSON.parse(xhr.responseText);
    this.response = response.response.results
  };
