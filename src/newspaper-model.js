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

    function fetchSummary(article) {
      let summaryRequest = new XMLHttpRequest();
      
      summaryRequest.open(
        'GET',
        `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${article.showUrl()}`
      );
      summaryRequest.onload = function() {
        if (summaryRequest.readyState === XMLHttpRequest.DONE) {
          if (summaryRequest.status === 200) {
            let data = JSON.parse(summaryRequest.responseText);
            article.summary = data.sentences.join("")
          } else {
            console.log("There was a problem with the request.")
          }
        }
      }
      summaryRequest.send();
    }

    return {
      viewArticles, 
      add, 
      fetchArticles, 
      fetchSummary
    };
  })();

  exports.Newspaper = Newspaper;
})(this);
