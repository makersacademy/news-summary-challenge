(function(exports){
  function Article(id, headline, summary, url, thumbnail){
    this.id_ = id
    this.headline_ = headline
    this.summary_  = summary
    this.url_ = url
    this.thumbnail_ = thumbnail
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
    url: function (){
      return this.url_
    },
    thumbnail: function (){
      return this.thumbnail_
    }
  }

  exports.Article = Article

}(this));
