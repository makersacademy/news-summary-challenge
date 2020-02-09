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
          Promise.all(data.response.results.map(d => {
            var aylien = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=';
            var articleUrl = d.webUrl;
            var articleTitle = d.webTitle;
            return fetch(aylien + articleUrl)
              .then(response => {
                return response.json();
              })
              .then(data => {
                var articleSummary = data.text;
                console.log("article found", articleSummary.slice(0, 20));
                self.newsModel.addArticle(articleTitle, articleSummary);
                return articleSummary;
              })
              .catch(err => {
                console.log(err);
              })
          })).then(data => {
            self.pageSetup();
            self.showingFullArticle();
          });
        })
        .catch(err => {
          console.log(err)
        });
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

