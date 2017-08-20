(function(exports){
  function ArticleManager(articleModel) {
    this._articleModel = articleModel;
    this._headlinesData = "";
    this._headlineArticles = [];
  }

  ArticleManager.prototype = {
    getHeadlines: function(){
      return this._headlinesData;
    },

    storeHeadlines: function(data){
      this._headlinesData = data;
      console.log(data);
    },

    getArticles: function(){
      return this._headlineArticles;
    },

    storeArticle: function(bodyData){
      this._headlineArticles.push(bodyData);
    }

  };

  exports.ArticleManager = ArticleManager;
})(this);
