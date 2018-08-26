'use strict';

(function(exports) {
  function NewsListView(newsList) {
   this.newsList = newsList;
  }
  
  NewsListView.prototype.htmlParser = function() {
      var str = "<ul>";
      this.newsList._newsStories.forEach(function(newsStory) {
        str += `<li><div><a href="http://localhost:8080#articles/` + newsStory.id() + `">` + newsStory.headline() + `</a></div></li>`
        // str += "<li><div><a href='http://localhost:8080#articles/'" + newsStory.id() + ">" + newsStory.headline() + "</a></div></li>"

      })
      str += "</ul>";
      return str;
    }
  
   exports.NewsListView = NewsListView;
 })(this);
