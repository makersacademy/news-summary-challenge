(function(exports) {
  'use strict';

  exports.RequestController = function(promoListModel, promoListView, RequestClass) {
    var _promoListModel = promoListModel;
    var _promoListView = promoListView;
    var _listController = new ListController(_promoListView);

    function doRequest() {
      var _httpRequest = new RequestClass();
      _httpRequest.onreadystatechange = function() {
        if (_httpRequest.readyState === RequestClass.DONE) {
          if (_httpRequest.status === 200) {
            var results = JSON.parse(_httpRequest.responseText).response.results;
            updatePromoListModel(results);
          }
        }
      };
      _httpRequest.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all", true);
      _httpRequest.send();
    }
    doRequest();

    function updatePromoListModel(results) {
      results.forEach(function(result) {
        _promoListModel.addArticle(new ArticleModel(result.webTitle, result.webUrl, result.fields.body, result.fields.main));
      });
      _listController.displayPromoList();
    }

  };

})(this);
