(function(exports){

  function ArticleView(article){
    this.article_ = article
  }

  ArticleView.prototype = {
    renderHTML: function (){
      console.log(this.article_)
      return `<ul><li><div><a${this.article_.headline()}><href="${(this.article_.headline())}</a><a href="${(this.article_.url())}">${(this.article_.summary())}</a></div></li></ul>`
    }
  }

  exports.ArticleView = ArticleView

}(this));
