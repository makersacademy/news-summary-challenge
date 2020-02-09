"use strict";

(function(exports) {
  function NewsController(newsModel, newsView) {
    this.newsModel = newsModel;
    this.newsView = newsView;
    
    this.pageSetup = function() {
      this.newsView.renderStructure();
      var articles = this.newsModel.newsArray;
      this.newsView.renderNewsList(articles);
    }

    var self = this

    this.getAllArticles = function(url) {
      fetch(url)
        .then(response => {
          console.log('RESPONSE', response)
          return response.json()
        })
        .then(data => {
          console.log('DATA', data)
          for (var i = 0; i < data.response.results.length; i++) {
            this.newsModel.addArticle(data.response.results[i].webTitle, data.response.results[i].webUrl)
            console.log(data.response.results[i].webTitle)
          }
          self.pageSetup();
        })
        .catch(err => {
          console.log('error', err)
        })
    }

    this.getAllArticles('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=politics');
  }

  exports.NewsController = NewsController;  
})(this);

