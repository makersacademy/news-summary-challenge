(function(exports){
  function testDisplay(){
    function ArticleViewDouble(articlelist) {
      this.articlelist = articlelist;
    }

    var html = ""
    ArticleViewDouble.prototype.display = function() {
      this.articlelist.list.map(function(article) {
        html += `<li><div><a href="${article.getID()}">${article.getText()}, ${article.getLink()}, ${article.getPic()}</a></div></li>`
      });
      return `<ul>${html}</ul>`
    };

    var articlelist = new ArticleList()
    articlelist.addArticle("text", "link", "pic")
    articlelist.addArticle("text", "link", "pic")
    var articleview = new ArticleViewDouble(articlelist);

    if(articleview.display()!== '<ul><li><div><a href="0">text, link, pic</a></div></li><li><div><a href="1">text, link, pic</a></div></li></ul>') {
      throw new Error("No articles");
    }
  };
testDisplay()
})(this);
