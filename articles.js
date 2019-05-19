(function(exports){

  function Articles(){
    this.url = "https://content.guardianapis.com/search?section=politics&api-key=9d90cbae-c5fb-426d-87ec-7df30ffbcd6c"
    this.articles = articles
  };

Articles.prototype.getArticles = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var results = JSON.parse(this.response).response.results;
      results.forEach(article => {
      articles.push(article)
    })
    }
  };

  xhttp.send();
};

exports.Articles = Articles;
})(this);
