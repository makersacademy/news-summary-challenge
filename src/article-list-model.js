(function(exports){

  function ArticleList (article = Article){
    this.articleCount = 0
    this.list_ = []
    this.articleClass = article
  }

  ArticleList.prototype = {
    list: function (){
      return this.list_
    },

    addArticle: function(id, headline, summary, inDepth, image) {
      this.articleCount ++
      this.list_.push(new this.articleClass(this.articleCount, headline, summary, inDepth, image))
    }
  }

  exports.ArticleList = ArticleList

}(this));
