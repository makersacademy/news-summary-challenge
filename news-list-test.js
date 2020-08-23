
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