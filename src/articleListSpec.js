(function(exports){
  function testAddArticle(){
    var articleList = new ArticleList();
    articlelist.addArticle("text", "link", "pic")
      articlelist.addArticle("text", "link", "pic")

      if(articlelist.getArticles().length !== 2){
        throw new Error("Article has not been added");
      };
  };
  testAddArticle();
})(this);


(function(exports){
  function testGetArticles(){
    var articleList = new ArticleList();
    articlelist.addArticle("text", "link", "pic")
      articlelist.addArticle("text", "link", "pic")

      if(articlelist.getArticles().length === 0){
        throw new Error("No articles");
      };
  };
  testGetArticles()
})(this);
