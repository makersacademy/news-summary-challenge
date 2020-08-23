(function(exports){
  function SingleArticleView(article) {
    this.article = article;
  }

  SingleArticleView.prototype = (function(){

    function articleToView() {
      return this.article
    };

    function returnHTML(){
      return "<div>" + this.articleToView().content() + "</div>"
    };

    return {
      articleToView,
      returnHTML
    };
  })()
  exports.SingleArticleView = SingleArticleView;
})(this)
