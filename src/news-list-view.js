'use strict';

(function(exports) {
  function NewsListView( newsList = new NewsList) {
    this.newsList = newsList
  };

  NewsListView.prototype.displayHTML = function(){

    var i

        for(i=0; i < this.newsList.all().length; i++){
          return "<ul>"+(this.newsList.all().map( x => "<li><div><a href='#" + i++ + "'>" + x.slice(0, 20) + "</a></div></li>").join(""))+"</ul>"

        }

  }



  exports.NewsListView = NewsListView;
  })(this);
