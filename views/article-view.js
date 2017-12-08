(function(exports){

  function ArticleView(article){
    this.article_ = article
  }

  ArticleView.prototype = {
    renderHTML: function (){
      return `<ul><li><div><a href="#articles/${article.id()}">${(article.headline())}</a></div></li></ul>`
    }
  }

  exports.ArticleView = ArticleView

}(this));
