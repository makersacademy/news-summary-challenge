(function(exports){

  exports.NewsListController = {
    createNewsList:  function(){ this.newsList = new NewsList() },
    displayNewsList: function(){
      var newsListView = new NewsListView( this.newsList );
      var element = document.getElementById("news-headline")
      element.innerHTML = newsListView.listNews()
    }
  }

})(this);