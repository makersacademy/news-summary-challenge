(function(exports){

function NewsController(Articles, ArticleListView){

  this.articles = new Articles();
  this.articleListView = ArticleListView
};

  NewsController.prototype.updateview = function (){
    var news_view = new ArticleListView(this.articles);
    news_view.get_view();
};

    exports.NewsController = NewsController;

})(this);
