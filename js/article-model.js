(function(exports){
  function Article(data){
    this._title = data.title;
    this._thumbnail = data.thumbnail;
    this._content = data.content;
    this._url = data.url;
  }

  Article.prototype = {
    title: function(){
      return this._title;
    },

    thumbnail: function(){
      return this._thumbnail;
    },

    content: function(){
      return this._content;
    },

    url: function(){
      return this._url;
    }
  };

  exports.Article = Article;
})(this);
