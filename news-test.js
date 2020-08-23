(function(exports){
  function newsArticle(){
    
    var article = new Article('On Todays Headline');

    if(article.newsArticle !== 'On Todays Headline'){
      throw new Error ('No article available')
    }
  };
  newsArticle();
})();

