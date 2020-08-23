
(function(exports){
  function newsListTest(){
    
    var article = new Article('House prices have dropped significantly');

    if(article.newsArticle !== 'House prices have dropped significantly'){
      throw new Error ('No article available')
    }
  };
  newsListTest();
})();


(function(exports){
  function requestArticleTest(){
    var article = new NewsListModel()

    if(article.list.length = 0){
      throw new Error('There is an article')
    };
  };

})();

(function(exports){
  function viewNewsTest(){
    var article = new NewsListModel();
    article.addArticle('Breaking News')
    var views = NewsListView(article);
    expectedHTML = '<h1>Breaking News</h1>'

    if(views.viewNewsHtml() == expectedHTML){
      throw new Error('There is an article')
    };
  };
  viewNewsTest();
})();
