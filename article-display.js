(function(exports) {
  function ArticleDisplay(newspaper, id) {
    this.newspaper = newspaper;
    this.id = id;
    this.showArticle(newspaper, id);
  };

  ArticleDisplay.prototype = (function(){

    function showArticle(newspaper, id) {
      let article = newspaper.articles()[id];
      let singlearticleview = new SingleArticleView(article);
      document.getElementById("app").innerHTML = singlearticleview.returnHTML();
    };

    return {
      showArticle
    }
  })();
exports.ArticleDisplay = ArticleDisplay;
})(this)
