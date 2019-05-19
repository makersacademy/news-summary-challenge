(function(exports){

  function Articles(url = "https://content.guardianapis.com/search?section=politics&api-key=9d90cbae-c5fb-426d-87ec-7df30ffbcd6c" ){
    this.url = url;
    this.articles = [];
  };

  Articles.prototype.getDataFromURL = function() {
    var self = this;
      return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", self.url, true);

        xhttp.onload = function() {
          if (this.readyState == 4 && this.status == 200) {

            self.articles = JSON.parse(this.response).response.results;

            resolve(self.articles)
          };
        };
        xhttp.send();
      });
    };


   Articles.prototype.getArticle = function() {
         var self = this;
       this.getDataFromURL().then(function(value) {
          self.articles = value;
      });

      return self.articles
    };


exports.Articles = Articles;
})(this);
