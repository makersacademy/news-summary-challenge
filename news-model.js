(function(exports) {

  function Article(newsArticle){
    this.newsArticle = newsArticle;
  };

  Article.prototype = (function(){
    function newsHeadline(){
      return(this.newsArticle);
    };

    return{newsHeadline};

  })();
  
  exports.Article = Article;
})(this);