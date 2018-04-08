  function ArticleRequest() {
    this.response = []
    this.url = 'https://jsonplaceholder.typicode.com/posts/1'
  };

  ArticleRequest.prototype.getNews = function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(xhr.responseText);
          return response.response.results;
       }
    };
    xhr.open("GET", this.url, true);
    xhr.send();
  };

articleRequest = new ArticleRequest()

var RESPONSE = articleRequest.getNews()
