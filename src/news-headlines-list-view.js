"use strict";
(function(exports){
  function NewsHeadlinesListView(newsHeadlineList){
    this.newsHeadlineList = newsHeadlineList;
  }
  NewsHeadlinesListView.prototype ={
    view: function(){
      var htmlString = [];
      htmlString.push("<ul>")
      this.newsHeadlineList.getHeadlines().forEach(function(headline){
        htmlString.push("<li><div><a href='#headlines/".concat(headline.id).concat("'>").concat(headline.webTitle).concat("</a></div></li>"))
      })
      htmlString.push("</ul>")
      return htmlString.join("")
    }
  }
  exports.NewsHeadlinesListView = NewsHeadlinesListView
})(this)
