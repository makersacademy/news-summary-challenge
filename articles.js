(function(exports){

  function Articles(url = "https://content.guardianapis.com/search?section=politics&api-key=9d90cbae-c5fb-426d-87ec-7df30ffbcd6c" ){
    this.url = url;
    this.articles = [];
    this.summaryApiUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
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

    Articles.prototype.getSummary = function(url){
      var self = this;
      return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", self.summaryApiUrl + url, true);

        xhttp.onload = function() {
          if (this.readyState == 4 && this.status == 200) {

            var summary = JSON.parse(this.response).sentences.join();
            resolve(summary)
          };
        };
        xhttp.send();
      });
    };

exports.Articles = Articles;
})(this);
