(function(exports){

  function ArticleView(article){
    this.article_ = article
  }

  ArticleView.prototype = {
    renderHTML: function (){
      console.log(this.article_)
      return `<ul><li><div><a${this.article_.headline()}>${(this.article_.headline())}</a></div></li></ul>`
    }
  }

  exports.ArticleView = ArticleView

}(this));
