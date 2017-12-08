(function(exports){
  function Article(id, headline, summary, inDepth, image){
    this.id_ = id
    this.headline_ = headline
    this.summary_  = summary
    this.inDepth_ = inDepth
    this.image_ = image
  }

  Article.prototype = {
    id: function (){
      return this.id_
    },
    headline: function (){
      return this.headline_
    },
    summary: function (){
      return this.summary_
    },
    inDepth: function (){
      return this.inDepth_
    },
    image: function (){
      return this.image_
    }
  }

  exports.Article = Article

})(this)
