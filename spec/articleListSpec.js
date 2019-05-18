(function(exports) {
  function testAddArticle() {
    var articlelist = new ArticleList();
    articlelist.addArticle("text", "link", "pic")
    articlelist.addArticle("text", "link", "pic")

    if(articlelist.getArticles().length !== 2) {
      throw new Error("Article not added");
    };
  };
  testAddArticle();
})(this);

(function(exports) {
  function testGetArticles() {
    var articlelist = new ArticleList();
    articlelist.addArticle("text", "link", "pic")
    articlelist.addArticle("text", "link", "pic")
    if(articlelist.getArticles().length === 0) {
      throw new Error("No articles");
    };
  };
testGetArticles();
})(this);
