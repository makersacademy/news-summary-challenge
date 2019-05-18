
(function(exports){
  function testInnerHTML(){

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

    function ArticleControllerDouble(articlelist, articleview) {
      this.articlelist = articlelist;
      this.articleview = articleview;
    };

    ArticleControllerDouble.prototype.updateDOM = function() {
      return document.getElementById('app').innerHTML = this.articleview.display()
    };

    var articlelist = new ArticleList()
    articlelist.addArticle("text", "link", "pic")
    var articleview = new ArticleViewDouble(articlelist)
    var controller = new ArticleControllerDouble(articlelist, articleview)

    if (controller.updateDOM() !== '<ul><li><div><a href="0">text, link, pic</a></div></li></ul>') {
      throw new Error("HTML does not match!")
    }
  }
testInnerHTML()
})(this);
