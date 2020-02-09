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
          return response.json()
        })
        .then(data => {
          for (var i = 0; i < data.response.results.length; i++) {
            this.newsModel.addArticle(data.response.results[i].webTitle, data.response.results[i].webUrl)
          }
          self.pageSetup();
          this.showingFullArticle();
        })
        .catch(err => {
        })
    }

    this.showingFullArticle = function() {
      var articleList = document.getElementsByClassName("listItem")
  
      var articleId = function() {
        var id = this.getAttribute('id');
        var article = self.newsModel.returnArticle(id);
        self.newsView.renderShowArticle(article);
        
        document.getElementById('closeWindow').addEventListener("click", function() {
          self.newsView.renderCloseArticle();
        });
      }
  
      for (var i = 0; i < articleList.length; i++) {
        articleList[i].addEventListener('click', articleId);
      }
      
    }

    this.getAllArticles('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=politics');
  }

  exports.NewsController = NewsController;  
})(this);

