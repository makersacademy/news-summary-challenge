"use strict";
(function(exports){
  function NewsHeadlinesList(NewsHeadline){
    this.id = 0;
    this.newsHeadlineFunction = NewsHeadline;
    this.headlines = [];
  }
  NewsHeadlinesList.prototype ={
      storeHeadline: function(webTitle, apiUrl){
        this.headlines.push(new this.newsHeadlineFunction(this.id, webTitle, apiUrl))
        this.id += 1
      },
      getHeadlines: function(){
        return this.headlines;
      }
  }
  exports.NewsHeadlinesList = NewsHeadlinesList
})(this)
