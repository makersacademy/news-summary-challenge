(function(exports) {
  
  const Newspaper = function() {
    this.articles = [];
  };

  Newspaper.prototype = (function() {

    function viewArticles() {
      return (this.articles);
    }
    function add(article) {
      (this.articles).push(article);
    }
    function fetchArticles(callback) {
      let articleRequest = new XMLHttpRequest();
      let that = this;

      articleRequest.open(
        'GET', 
        'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search'
      );
      
      articleRequest.onload = function() {
        if (articleRequest.readyState === XMLHttpRequest.DONE) {
          if (articleRequest.status === 200) {
            let data = JSON.parse(articleRequest.responseText);
            data.response.results.forEach(function(result) {
            that.add(new Article(result.webTitle, result.webUrl));
            });
            if (callback) {
              callback();
            }
          } else {
            console.log("There was a problem with the request.")
          }
        }
      }
      articleRequest.send();
    }

    return {
      viewArticles, add, fetchArticles
    }
  })();

  exports.Newspaper = Newspaper;
})(this);
