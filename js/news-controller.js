(function(exports){
  function NewsController(apiRequester, articleManagerModel, headlinesView) {
    this._apiRequester = new apiRequester();
    this._articleManager = new articleManagerModel();
    this._headlinesView = new headlinesView();
  }

  NewsController.prototype = {
    getHeadlines: function() {
      // GET DATA
      // var headlinesData = this._apiRequester.getData(ownKeyHeadlinesApiRequest);

      // STORE DATA
      // this._articleManager.storeHeadlines(headlinesData);
      this._articleManager.storeHeadlines(testHeadlinesResponse);
    },

    displayHeadlines: function(){

    },

    getHeadlineArticles: function(){

    }
  };

  exports.NewsController = NewsController;
})(this);
