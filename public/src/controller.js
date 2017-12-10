(function(exports) {

  function Controller(contentDiv, articleList, xhttp) {
    this._contentDiv = contentDiv;
    this._articleList = articleList;
    this._xhttp = xhttp;
  };

  Controller.prototype = {

    _getContentDiv: function() {
      return this._contentDiv;
    },

    _getArticleList: function() {
      return this._articleList;
    },

    _getXhttp: function() {
      return this._xhttp;
    },

    _requestData: function() {
      var controller = this
      this._getXhttp().onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          data = JSON.parse(this.response).response.results
          data.forEach(function(article) {
            controller._getArticleList().addArticle(article.id, article.sectionId, article.fields.headline, article.fields.thumbnail)
            controller._setView()
          })
        }
      };
      this._getXhttp().open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=headline,thumbnail", true)
      this._getXhttp().send();
    },

    _setView: function() {
      var articleListView = new ArticleListView(this._getArticleList())
      this._getContentDiv().innerHTML= articleListView.getListHTML()
    }

  };

  exports.Controller = Controller

})(this);
